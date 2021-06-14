import React from 'react';

type MyProps = {size:any, colors:any, icon:string, className?:string, style?:any};
type MyState = {};

export class Icons extends React.Component<MyProps, MyState> {

  render () {

    let home = <>
      <rect y="0.261963" width="5.25" height="5.13196" rx="2" fill={this.props.colors[0]} fillOpacity="0.4"/>
      <rect y="7.95996" width="5.25" height="5.13197" rx="2" fill={this.props.colors[0]}fillOpacity="0.4"/>
      <rect y="15.6578" width="5.25" height="5.13196" rx="2" fill={this.props.colors[0]} fillOpacity="0.4"/>
      <rect x="7.875" y="15.6578" width="5.25" height="5.13196" rx="2" fill={this.props.colors[0]}fillOpacity="0.4"/>
      <rect width="5.25" height="5.13197" rx="2" transform="matrix(1 0 0 -1 7.875 13.0919)" fill={this.props.colors[0]} fillOpacity="0.4"/>
      <rect x="7.875" y="0.261963" width="5.25" height="5.13196" rx="2" fill={this.props.colors[0]} fillOpacity="0.4"/>
      <rect width="5.25" height="5.13196" rx="2" transform="matrix(1 0 0 -1 15.75 5.39392)" fill={this.props.colors[0]} fillOpacity="0.4"/>
      <rect width="5.25" height="5.13197" rx="2" transform="matrix(1 0 0 -1 15.75 13.0919)" fill={this.props.colors[0]} fillOpacity="0.4"/>
      <rect width="5.25" height="5.13196" rx="2" transform="matrix(1 0 0 -1 15.75 20.7898)" fill={this.props.colors[0]} fillOpacity="0.4"/>
    </>;

    let actions = <>
      <g
        id="g4">
        <path
          d="M6.3891 8.87176V7.02104C6.3891 5.54851 6.98024 4.1363 8.03246 3.09506C9.08469 2.05383 10.5118 1.46887 11.9999 1.46887V1.46887C13.488 1.46887 14.9151 2.05383 15.9673 3.09506C17.0195 4.1363 17.6107 5.54851 17.6107 7.02104V8.87176M11.9999 13.4986V20.9015V13.4986ZM15.7404 17.2H8.25937H15.7404ZM1.71345 8.87176C1.46544 8.87176 1.22758 8.96926 1.05221 9.1428C0.876843 9.31633 0.77832 9.5517 0.77832 9.79712V22.2895C0.77832 24.0384 2.28388 25.5283 4.05128 25.5283H19.9485C21.7159 25.5283 23.2215 24.1107 23.2215 22.3618V9.79712C23.2215 9.5517 23.1229 9.31633 22.9476 9.1428C22.7722 8.96926 22.5343 8.87176 22.2863 8.87176H1.71345Z"
          stroke={this.props.colors[0]}
          strokeOpacity="0.4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="rgba(0,0,0,0)"
          id="path2" />
      </g>
    </>;

    let info = <>
      <g>
        <path fill="rgba(0,0,0,0)" d="M14.5001 1.60889C7.00331 1.60889 0.924561 7.59412 0.924561 14.9756C0.924561 22.357 7.00331 28.3423 14.5001 28.3423C21.9969 28.3423 28.0757 22.357 28.0757 14.9756C28.0757 7.59412 21.9969 1.60889 14.5001 1.60889V1.60889Z" stroke={this.props.colors[0]} strokeOpacity="0.4" strokeWidth="2" strokeMiterlimit="8"/>
        <path fill="rgba(0,0,0,0)" d="M12.4343 12.9415H14.7953V21.3684" stroke={this.props.colors[0]} strokeOpacity="0.4" strokeWidth="2" strokeMiterlimit="8" strokeLinecap="round" strokeLinejoin="round"/>
        <path fill="rgba(0,0,0,0)" d="M11.5488 21.6589H18.0415" stroke={this.props.colors[0]} strokeOpacity="0.4" strokeWidth="2" strokeMiterlimit="8" strokeLinecap="round"/>
        <path fill="rgba(0,0,0,0)" d="M14.5001 6.40344C14.1207 6.40344 13.7498 6.51422 13.4343 6.72176C13.1189 6.9293 12.873 7.22428 12.7278 7.56941C12.5826 7.91454 12.5446 8.29431 12.6186 8.66069C12.6927 9.02708 12.8754 9.36363 13.1436 9.62778C13.4119 9.89193 13.7537 10.0718 14.1258 10.1447C14.4979 10.2176 14.8836 10.1802 15.2342 10.0372C15.5847 9.89425 15.8843 9.65216 16.0951 9.34155C16.3058 9.03095 16.4184 8.66578 16.4184 8.29221C16.4184 7.79128 16.2163 7.31086 15.8565 6.95665C15.4968 6.60243 15.0088 6.40344 14.5001 6.40344Z" fillOpacity="0.4"/>
      </g>
    </>;

    let plus = <>
      <path d="M7.11621 11.6431H10.8179V14.3193H7.11621V18.5029H4.29639V14.3193H0.584473V11.6431H4.29639V7.63379H7.11621V11.6431Z" fill={this.props.colors[0]} fillOpacity="0.8"/>
    </>


    let iconContent;
    if(this.props.icon == "home"){
      iconContent = home;
    }else if(this.props.icon == "actions"){
      iconContent = actions;
    }else if(this.props.icon == "info"){
      iconContent = info;
    }else if(this.props.icon == "plus"){
      iconContent = plus;
    }else{
      iconContent = info;
    }

    let style:any = {};
    if(this.props.style){
      style = this.props.style;
    }
    
    return (
      <svg className={this.props.className} style={style} viewBox='0 0 30 30' width={`${this.props.size}px`} height={`${this.props.size}px`} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
       {iconContent}
      </svg>
      );
    
  }
}
