import { IOutput } from '../models/IOutput'
import lodash from 'lodash-es'
import deepdash from 'deepdash-es'

export class Scheema {
  public static getResponseParameter (
    scheema: IOutput[],
    response: any,
    query: any
  ) {
    const _ = deepdash(lodash)

    // Filter field of schema
    const output: any = _.filterDeep(scheema, query, {
      childrenPath: ['childs'],
    })

    const internalName = output[0].childs[0].internal_name

    // filter data from response
    // TODO fix the possibility of find wrong, but same-name property.
    const responseData: any = _.filterDeep(
      response,
      (_output: any, key: string | number) => key == internalName,
      { childrenPath: undefined }
    )

    const value = response.data[internalName]

    return value
  }

  public static entity = {}
  public static process (data: any) {
    for (const { path, value, scheema } of data) {
      let i = 0
      var reference: any = this.entity
      for (let pathItem of path) {
        if (!path[i + 1]) {
          //Last, Is Value
          reference[pathItem] = { value, scheema }
          reference = reference[pathItem]
          break
        }

        if (!reference[pathItem]) {
          reference[pathItem] = {}
        }
        reference = reference[pathItem]

        i++
      }

      reference = this.entity
    }

    return this.entity
  }

  public static getResponses (scheema: IOutput[], response: any) {
    const _ = deepdash(lodash)

    var processQueue: any = []
    this.entity = {}

    for (let field of scheema) {
      let scheemaContext: any = field.address?.split('.')

      _.eachDeep(
        response,
        (value: any, key: any, parentValue: any, context: any) => {
          let path = context._item.path
          if (!path) {
            return true
          }
          let pathI = 0

          let index = 0

          for (let pathItem of path) {
            if (isNaN(pathItem)) {
              if (scheemaContext[pathI] != pathItem) {
                return true
              }

              if (index + 1 == path.length) {
                // Last One Path
                if (pathI + 1 == scheemaContext.length) {
                  //Last One Scheema
                  processQueue.push({ path, value, scheema: field })
                }
              }

              pathI++
            }
            index++
          }

          return true
        },
        { childrenPath: undefined }
      )
    }

    this.process(processQueue)
    return this.entity
  }
}
