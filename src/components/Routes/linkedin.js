import React from "react";
import axios from "axios";
import { LinkedInApi } from "../../helper/config";
import { getSSOUserCredentials } from "../Routes/userService";
import { BsFacebook, BsLinkedin } from "react-icons/bs";

class LinkedInUI extends React.Component {
  initialState = {
    user: {},
    loggedIn: false,
    token: "",
    count: 0,
  };

  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  componentDidMount = () => {
    if (window.opener && window.opener !== window) {
      const code = this.getCodeFromWindowURL(window.location.href);
      window.opener.postMessage({ type: "code", code: code }, "*");
      window.close();
    }
    window.addEventListener("message", this.handlePostMessage);
  };

  componentWillUnmount() {
    window.removeEventListener("message", this.handlePostMessage);
  }

  handlePostMessage = async (event) => {
    console.log(event, "events");
    console.log(this.props, "props");

    const { code } = event.data;
    const data = {
      oauthCode: code,
    };
    const res = await getSSOUserCredentials(
      {
        type: "linkedin",
        endPoint: this.props.type === "signIn" ? "login" : "register",
      },
      data
    );
    console.log("res=====", res);
    //   if (res?.error?.message) {
    //     this.props.callBackFun(res);
    //   } else if (res?.data?.token) {
    //     this.props.callBackFun(res?.data);
    //   }
    this.props.callBackFun(res);
  };

  getCodeFromWindowURL = (url) => {
    const popupWindowURL = new URL(url);
    return popupWindowURL.searchParams.get("code");
  };

  showPopup = () => {
    const { clientId, redirectUrl, oauthUrl, scope, state } = LinkedInApi;
    const { count } = this.state;
    this.count = 1;
    let oauthUrl2 = `${oauthUrl}&client_id=${clientId}&scope=${scope}&state=${state}&redirect_uri=${redirectUrl}`;
    console.log("oauthUrl2", oauthUrl2);
    const width = 450,
      height = 730,
      left = window.screen.width / 2 - width / 2,
      top = window.screen.height / 2 - height / 2;
    window.open(
      oauthUrl2,
      "Linkedin",
      "menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=" +
        width +
        ", height=" +
        height +
        ", top=" +
        top +
        ", left=" +
        left
    );
  };

  render() {
    const { loggedIn, user, count } = this.state;

    const contentWhenLoggedIn = (
      <>
        <img src={user.profileImageURL} alt="Profile image" />
        <h3>{`${user.firstName} ${user.lastName}`}</h3>
        <h3>{user.email}</h3>
      </>
    );
    const contentWhenLoggedOut =
      this.props.type == "signIn" ? (
        // <svg
        //   width="295"
        //   height="34"
        //   viewBox="0 0 295 34"
        //   fill="none"
        //   xmlns="http://www.w3.org/2000/svg"
        //   onClick={this.showPopup}
        // >
        //   <rect
        //     x="0.410156"
        //     y="0.0751953"
        //     width="293.902"
        //     height="33.398"
        //     rx="4"
        //     fill="#0077B5"
        //   />
        //   <path
        //     d="M90.696 14.716C90.288 14.716 89.952 14.8 89.688 14.968C89.424 15.136 89.292 15.392 89.292 15.736C89.292 16.072 89.424 16.332 89.688 16.516C89.952 16.692 90.512 16.884 91.368 17.092C92.232 17.3 92.88 17.592 93.312 17.968C93.752 18.344 93.972 18.9 93.972 19.636C93.972 20.364 93.696 20.956 93.144 21.412C92.592 21.868 91.868 22.096 90.972 22.096C89.66 22.096 88.496 21.644 87.48 20.74L88.368 19.672C89.216 20.408 90.096 20.776 91.008 20.776C91.464 20.776 91.824 20.68 92.088 20.488C92.36 20.288 92.496 20.028 92.496 19.708C92.496 19.38 92.368 19.128 92.112 18.952C91.864 18.768 91.432 18.604 90.816 18.46C90.2 18.308 89.732 18.172 89.412 18.052C89.092 17.924 88.808 17.76 88.56 17.56C88.064 17.184 87.816 16.608 87.816 15.832C87.816 15.056 88.096 14.46 88.656 14.044C89.224 13.62 89.924 13.408 90.756 13.408C91.292 13.408 91.824 13.496 92.352 13.672C92.88 13.848 93.336 14.096 93.72 14.416L92.964 15.484C92.716 15.26 92.38 15.076 91.956 14.932C91.532 14.788 91.112 14.716 90.696 14.716ZM96.8746 22H95.5306V15.616H96.8746V22ZM95.6146 14.344C95.4466 14.176 95.3626 13.976 95.3626 13.744C95.3626 13.512 95.4466 13.312 95.6146 13.144C95.7826 12.976 95.9826 12.892 96.2146 12.892C96.4466 12.892 96.6466 12.976 96.8146 13.144C96.9826 13.312 97.0666 13.512 97.0666 13.744C97.0666 13.976 96.9826 14.176 96.8146 14.344C96.6466 14.512 96.4466 14.596 96.2146 14.596C95.9826 14.596 95.7826 14.512 95.6146 14.344ZM104.728 15.616V21.184C104.728 22.312 104.42 23.156 103.804 23.716C103.196 24.284 102.412 24.568 101.452 24.568C100.492 24.568 99.6236 24.268 98.8476 23.668L99.4836 22.648C100.108 23.12 100.736 23.356 101.368 23.356C102.008 23.356 102.512 23.192 102.88 22.864C103.256 22.536 103.444 22.012 103.444 21.292V20.476C103.244 20.852 102.956 21.152 102.58 21.376C102.212 21.6 101.796 21.712 101.332 21.712C100.484 21.712 99.7876 21.416 99.2436 20.824C98.6996 20.232 98.4276 19.496 98.4276 18.616C98.4276 17.736 98.6996 17 99.2436 16.408C99.7876 15.816 100.48 15.52 101.32 15.52C102.168 15.52 102.856 15.868 103.384 16.564V15.616H104.728ZM99.7476 18.568C99.7476 19.088 99.9076 19.54 100.228 19.924C100.556 20.3 100.992 20.488 101.536 20.488C102.088 20.488 102.532 20.304 102.868 19.936C103.212 19.568 103.384 19.112 103.384 18.568C103.384 18.016 103.212 17.552 102.868 17.176C102.524 16.792 102.08 16.6 101.536 16.6C100.992 16.6 100.556 16.796 100.228 17.188C99.9076 17.58 99.7476 18.04 99.7476 18.568ZM108.019 18.544V22H106.675V15.616H108.019V16.78C108.235 16.388 108.531 16.08 108.907 15.856C109.291 15.632 109.703 15.52 110.143 15.52C110.863 15.52 111.443 15.74 111.883 16.18C112.331 16.62 112.555 17.256 112.555 18.088V22H111.211V18.496C111.211 17.32 110.723 16.732 109.747 16.732C109.283 16.732 108.879 16.888 108.535 17.2C108.191 17.504 108.019 17.952 108.019 18.544ZM119.07 22H117.726V15.616H119.07V22ZM117.81 14.344C117.642 14.176 117.558 13.976 117.558 13.744C117.558 13.512 117.642 13.312 117.81 13.144C117.978 12.976 118.178 12.892 118.41 12.892C118.642 12.892 118.842 12.976 119.01 13.144C119.178 13.312 119.262 13.512 119.262 13.744C119.262 13.976 119.178 14.176 119.01 14.344C118.842 14.512 118.642 14.596 118.41 14.596C118.178 14.596 117.978 14.512 117.81 14.344ZM122.363 18.544V22H121.019V15.616H122.363V16.78C122.579 16.388 122.875 16.08 123.251 15.856C123.635 15.632 124.047 15.52 124.487 15.52C125.207 15.52 125.787 15.74 126.227 16.18C126.675 16.62 126.899 17.256 126.899 18.088V22H125.555V18.496C125.555 17.32 125.067 16.732 124.091 16.732C123.627 16.732 123.223 16.888 122.879 17.2C122.535 17.504 122.363 17.952 122.363 18.544ZM135.058 22H133.522L131.314 15.616H132.706L134.29 20.44L135.874 15.616H137.266L138.85 20.44L140.434 15.616H141.826L139.618 22H138.082L136.57 17.632L135.058 22ZM144.359 22H143.015V15.616H144.359V22ZM143.099 14.344C142.931 14.176 142.847 13.976 142.847 13.744C142.847 13.512 142.931 13.312 143.099 13.144C143.267 12.976 143.467 12.892 143.699 12.892C143.931 12.892 144.131 12.976 144.299 13.144C144.467 13.312 144.551 13.512 144.551 13.744C144.551 13.976 144.467 14.176 144.299 14.344C144.131 14.512 143.931 14.596 143.699 14.596C143.467 14.596 143.267 14.512 143.099 14.344ZM147.964 16.696V19.936C147.964 20.24 148.044 20.484 148.204 20.668C148.364 20.844 148.588 20.932 148.876 20.932C149.164 20.932 149.44 20.792 149.704 20.512L150.256 21.46C149.784 21.884 149.26 22.096 148.684 22.096C148.116 22.096 147.628 21.9 147.22 21.508C146.82 21.108 146.62 20.572 146.62 19.9V16.696H145.816V15.616H146.62V13.612H147.964V15.616H149.644V16.696H147.964ZM152.668 18.544V22H151.324V13.108H152.668V16.78C152.86 16.388 153.148 16.08 153.532 15.856C153.924 15.632 154.344 15.52 154.792 15.52C155.512 15.52 156.092 15.74 156.532 16.18C156.98 16.62 157.204 17.256 157.204 18.088V22H155.86V18.496C155.86 17.32 155.372 16.732 154.396 16.732C153.932 16.732 153.528 16.888 153.184 17.2C152.84 17.504 152.668 17.952 152.668 18.544ZM162.566 22V13.612H163.982V20.656H167.81V22H162.566ZM170.515 22H169.171V15.616H170.515V22ZM169.255 14.344C169.087 14.176 169.003 13.976 169.003 13.744C169.003 13.512 169.087 13.312 169.255 13.144C169.423 12.976 169.623 12.892 169.855 12.892C170.087 12.892 170.287 12.976 170.455 13.144C170.623 13.312 170.707 13.512 170.707 13.744C170.707 13.976 170.623 14.176 170.455 14.344C170.287 14.512 170.087 14.596 169.855 14.596C169.623 14.596 169.423 14.512 169.255 14.344ZM173.808 18.544V22H172.464V15.616H173.808V16.78C174.024 16.388 174.32 16.08 174.696 15.856C175.08 15.632 175.492 15.52 175.932 15.52C176.652 15.52 177.232 15.74 177.672 16.18C178.12 16.62 178.344 17.256 178.344 18.088V22H177V18.496C177 17.32 176.512 16.732 175.536 16.732C175.072 16.732 174.668 16.888 174.324 17.2C173.98 17.504 173.808 17.952 173.808 18.544ZM181.566 22H180.222V13.096H181.566V18.328L184.158 15.616H185.886L183.462 18.148L186.066 22H184.434L182.538 19.204L181.566 20.188V22ZM193.135 19.396H188.131C188.163 19.86 188.375 20.236 188.767 20.524C189.159 20.804 189.607 20.944 190.111 20.944C190.911 20.944 191.519 20.692 191.935 20.188L192.703 21.028C192.015 21.74 191.119 22.096 190.015 22.096C189.119 22.096 188.355 21.8 187.723 21.208C187.099 20.608 186.787 19.808 186.787 18.808C186.787 17.8 187.107 17 187.747 16.408C188.387 15.816 189.139 15.52 190.003 15.52C190.875 15.52 191.615 15.784 192.223 16.312C192.831 16.832 193.135 17.552 193.135 18.472V19.396ZM188.131 18.34H191.791C191.791 17.804 191.623 17.392 191.287 17.104C190.951 16.816 190.535 16.672 190.039 16.672C189.551 16.672 189.111 16.824 188.719 17.128C188.327 17.424 188.131 17.828 188.131 18.34ZM197.217 22.096C196.409 22.096 195.705 21.792 195.105 21.184C194.505 20.576 194.205 19.776 194.205 18.784C194.205 17.792 194.513 17 195.129 16.408C195.745 15.816 196.477 15.52 197.325 15.52C198.181 15.52 198.869 15.88 199.389 16.6V13.096H200.733V22H199.389V21.04C198.893 21.744 198.169 22.096 197.217 22.096ZM195.549 18.844C195.549 19.452 195.745 19.948 196.137 20.332C196.529 20.716 196.989 20.908 197.517 20.908C198.045 20.908 198.493 20.716 198.861 20.332C199.229 19.94 199.413 19.44 199.413 18.832C199.413 18.224 199.229 17.716 198.861 17.308C198.493 16.9 198.041 16.696 197.505 16.696C196.969 16.696 196.509 16.9 196.125 17.308C195.741 17.716 195.549 18.228 195.549 18.844ZM204.019 22H202.675V15.616H204.019V22ZM202.759 14.344C202.591 14.176 202.507 13.976 202.507 13.744C202.507 13.512 202.591 13.312 202.759 13.144C202.927 12.976 203.127 12.892 203.359 12.892C203.591 12.892 203.791 12.976 203.959 13.144C204.127 13.312 204.211 13.512 204.211 13.744C204.211 13.976 204.127 14.176 203.959 14.344C203.791 14.512 203.591 14.596 203.359 14.596C203.127 14.596 202.927 14.512 202.759 14.344ZM207.312 18.544V22H205.968V15.616H207.312V16.78C207.528 16.388 207.824 16.08 208.2 15.856C208.584 15.632 208.996 15.52 209.436 15.52C210.156 15.52 210.736 15.74 211.176 16.18C211.624 16.62 211.848 17.256 211.848 18.088V22H210.504V18.496C210.504 17.32 210.016 16.732 209.04 16.732C208.576 16.732 208.172 16.888 207.828 17.2C207.484 17.504 207.312 17.952 207.312 18.544Z"
        //     fill="white"
        //   />
        //   <path
        //     d="M66.2449 13.5518H63.7819C63.6726 13.5518 63.584 13.6404 63.584 13.7496V21.6625C63.584 21.7718 63.6726 21.8603 63.7819 21.8603H66.2449C66.3543 21.8603 66.4428 21.7718 66.4428 21.6625V13.7496C66.4428 13.6404 66.3543 13.5518 66.2449 13.5518Z"
        //     fill="white"
        //   />
        //   <path
        //     d="M65.014 9.61768C64.1178 9.61768 63.3887 10.346 63.3887 11.2412C63.3887 12.1368 64.1178 12.8654 65.014 12.8654C65.9095 12.8654 66.638 12.1368 66.638 11.2412C66.638 10.346 65.9095 9.61768 65.014 9.61768Z"
        //     fill="white"
        //   />
        //   <path
        //     d="M72.5105 13.3545C71.5212 13.3545 70.79 13.7798 70.3464 14.263V13.749C70.3464 13.6398 70.2578 13.5512 70.1485 13.5512H67.7897C67.6804 13.5512 67.5918 13.6398 67.5918 13.749V21.6618C67.5918 21.7712 67.6804 21.8597 67.7897 21.8597H70.2474C70.3567 21.8597 70.4453 21.7712 70.4453 21.6618V17.7468C70.4453 16.4276 70.8036 15.9136 71.7233 15.9136C72.7248 15.9136 72.8044 16.7376 72.8044 17.8147V21.6619C72.8044 21.7712 72.893 21.8598 73.0023 21.8598H75.4609C75.5702 21.8598 75.6588 21.7712 75.6588 21.6619V17.3216C75.6588 15.3599 75.2847 13.3545 72.5105 13.3545Z"
        //     fill="white"
        //   />
        // </svg>
        <></>
      ) : (
        // <svg width="143" height="33" viewBox="0 0 143 33" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={this.showPopup}>
        //   <rect width="143" height="33" rx="4" fill="#0077B5" />
        //   <path
        //     d="M29.08 13.93C28.74 13.93 28.46 14 28.24 14.14C28.02 14.28 27.91 14.4933 27.91 14.78C27.91 15.06 28.02 15.2767 28.24 15.43C28.46 15.5767 28.9267 15.7367 29.64 15.91C30.36 16.0833 30.9 16.3267 31.26 16.64C31.6267 16.9533 31.81 17.4167 31.81 18.03C31.81 18.6367 31.58 19.13 31.12 19.51C30.66 19.89 30.0567 20.08 29.31 20.08C28.2167 20.08 27.2467 19.7033 26.4 18.95L27.14 18.06C27.8467 18.6733 28.58 18.98 29.34 18.98C29.72 18.98 30.02 18.9 30.24 18.74C30.4667 18.5733 30.58 18.3567 30.58 18.09C30.58 17.8167 30.4733 17.6067 30.26 17.46C30.0533 17.3067 29.6933 17.17 29.18 17.05C28.6667 16.9233 28.2767 16.81 28.01 16.71C27.7433 16.6033 27.5067 16.4667 27.3 16.3C26.8867 15.9867 26.68 15.5067 26.68 14.86C26.68 14.2133 26.9133 13.7167 27.38 13.37C27.8533 13.0167 28.4367 12.84 29.13 12.84C29.5767 12.84 30.02 12.9133 30.46 13.06C30.9 13.2067 31.28 13.4133 31.6 13.68L30.97 14.57C30.7633 14.3833 30.4833 14.23 30.13 14.11C29.7767 13.99 29.4267 13.93 29.08 13.93ZM34.2288 20H33.1088V14.68H34.2288V20ZM33.1788 13.62C33.0388 13.48 32.9688 13.3133 32.9688 13.12C32.9688 12.9267 33.0388 12.76 33.1788 12.62C33.3188 12.48 33.4855 12.41 33.6788 12.41C33.8722 12.41 34.0388 12.48 34.1788 12.62C34.3188 12.76 34.3888 12.9267 34.3888 13.12C34.3888 13.3133 34.3188 13.48 34.1788 13.62C34.0388 13.76 33.8722 13.83 33.6788 13.83C33.4855 13.83 33.3188 13.76 33.1788 13.62ZM40.773 14.68V19.32C40.773 20.26 40.5163 20.9633 40.003 21.43C39.4963 21.9033 38.843 22.14 38.043 22.14C37.243 22.14 36.5196 21.89 35.873 21.39L36.403 20.54C36.923 20.9333 37.4463 21.13 37.973 21.13C38.5063 21.13 38.9263 20.9933 39.233 20.72C39.5463 20.4467 39.703 20.01 39.703 19.41V18.73C39.5363 19.0433 39.2963 19.2933 38.983 19.48C38.6763 19.6667 38.3296 19.76 37.943 19.76C37.2363 19.76 36.6563 19.5133 36.203 19.02C35.7496 18.5267 35.523 17.9133 35.523 17.18C35.523 16.4467 35.7496 15.8333 36.203 15.34C36.6563 14.8467 37.233 14.6 37.933 14.6C38.6396 14.6 39.213 14.89 39.653 15.47V14.68H40.773ZM36.623 17.14C36.623 17.5733 36.7563 17.95 37.023 18.27C37.2963 18.5833 37.6596 18.74 38.113 18.74C38.573 18.74 38.943 18.5867 39.223 18.28C39.5096 17.9733 39.653 17.5933 39.653 17.14C39.653 16.68 39.5096 16.2933 39.223 15.98C38.9363 15.66 38.5663 15.5 38.113 15.5C37.6596 15.5 37.2963 15.6633 37.023 15.99C36.7563 16.3167 36.623 16.7 36.623 17.14ZM43.5159 17.12V20H42.3959V14.68H43.5159V15.65C43.6959 15.3233 43.9426 15.0667 44.2559 14.88C44.5759 14.6933 44.9193 14.6 45.2859 14.6C45.8859 14.6 46.3693 14.7833 46.7359 15.15C47.1093 15.5167 47.2959 16.0467 47.2959 16.74V20H46.1759V17.08C46.1759 16.1 45.7693 15.61 44.9559 15.61C44.5693 15.61 44.2326 15.74 43.9459 16C43.6593 16.2533 43.5159 16.6267 43.5159 17.12ZM52.7249 20H51.6049V14.68H52.7249V20ZM51.6749 13.62C51.5349 13.48 51.4649 13.3133 51.4649 13.12C51.4649 12.9267 51.5349 12.76 51.6749 12.62C51.8149 12.48 51.9816 12.41 52.1749 12.41C52.3683 12.41 52.5349 12.48 52.6749 12.62C52.8149 12.76 52.8849 12.9267 52.8849 13.12C52.8849 13.3133 52.8149 13.48 52.6749 13.62C52.5349 13.76 52.3683 13.83 52.1749 13.83C51.9816 13.83 51.8149 13.76 51.6749 13.62ZM55.4691 17.12V20H54.3491V14.68H55.4691V15.65C55.6491 15.3233 55.8957 15.0667 56.2091 14.88C56.5291 14.6933 56.8724 14.6 57.2391 14.6C57.8391 14.6 58.3224 14.7833 58.6891 15.15C59.0624 15.5167 59.2491 16.0467 59.2491 16.74V20H58.1291V17.08C58.1291 16.1 57.7224 15.61 56.9091 15.61C56.5224 15.61 56.1857 15.74 55.8991 16C55.6124 16.2533 55.4691 16.6267 55.4691 17.12ZM66.048 20H64.768L62.928 14.68H64.088L65.408 18.7L66.728 14.68H67.888L69.208 18.7L70.528 14.68H71.688L69.848 20H68.568L67.308 16.36L66.048 20ZM73.7991 20H72.6791V14.68H73.7991V20ZM72.7491 13.62C72.6091 13.48 72.5391 13.3133 72.5391 13.12C72.5391 12.9267 72.6091 12.76 72.7491 12.62C72.8891 12.48 73.0558 12.41 73.2491 12.41C73.4425 12.41 73.6091 12.48 73.7491 12.62C73.8891 12.76 73.9591 12.9267 73.9591 13.12C73.9591 13.3133 73.8891 13.48 73.7491 13.62C73.6091 13.76 73.4425 13.83 73.2491 13.83C73.0558 13.83 72.8891 13.76 72.7491 13.62ZM76.8033 15.58V18.28C76.8033 18.5333 76.8699 18.7367 77.0033 18.89C77.1366 19.0367 77.3233 19.11 77.5633 19.11C77.8033 19.11 78.0333 18.9933 78.2533 18.76L78.7133 19.55C78.3199 19.9033 77.8833 20.08 77.4033 20.08C76.9299 20.08 76.5233 19.9167 76.1833 19.59C75.8499 19.2567 75.6833 18.81 75.6833 18.25V15.58H75.0133V14.68H75.6833V13.01H76.8033V14.68H78.2033V15.58H76.8033ZM80.723 17.12V20H79.603V12.59H80.723V15.65C80.883 15.3233 81.123 15.0667 81.443 14.88C81.7696 14.6933 82.1196 14.6 82.493 14.6C83.093 14.6 83.5763 14.7833 83.943 15.15C84.3163 15.5167 84.503 16.0467 84.503 16.74V20H83.383V17.08C83.383 16.1 82.9763 15.61 82.163 15.61C81.7763 15.61 81.4396 15.74 81.153 16C80.8663 16.2533 80.723 16.6267 80.723 17.12ZM88.972 20V13.01H90.152V18.88H93.342V20H88.972ZM95.596 20H94.476V14.68H95.596V20ZM94.546 13.62C94.406 13.48 94.336 13.3133 94.336 13.12C94.336 12.9267 94.406 12.76 94.546 12.62C94.686 12.48 94.8527 12.41 95.046 12.41C95.2393 12.41 95.406 12.48 95.546 12.62C95.686 12.76 95.756 12.9267 95.756 13.12C95.756 13.3133 95.686 13.48 95.546 13.62C95.406 13.76 95.2393 13.83 95.046 13.83C94.8527 13.83 94.686 13.76 94.546 13.62ZM98.3402 17.12V20H97.2202V14.68H98.3402V15.65C98.5202 15.3233 98.7668 15.0667 99.0802 14.88C99.4002 14.6933 99.7435 14.6 100.11 14.6C100.71 14.6 101.193 14.7833 101.56 15.15C101.933 15.5167 102.12 16.0467 102.12 16.74V20H101V17.08C101 16.1 100.593 15.61 99.7802 15.61C99.3935 15.61 99.0568 15.74 98.7702 16C98.4835 16.2533 98.3402 16.6267 98.3402 17.12ZM104.805 20H103.685V12.58H104.805V16.94L106.965 14.68H108.405L106.385 16.79L108.555 20H107.195L105.615 17.67L104.805 18.49V20ZM114.446 17.83H110.276C110.302 18.2167 110.479 18.53 110.806 18.77C111.132 19.0033 111.506 19.12 111.926 19.12C112.592 19.12 113.099 18.91 113.446 18.49L114.086 19.19C113.512 19.7833 112.766 20.08 111.846 20.08C111.099 20.08 110.462 19.8333 109.936 19.34C109.416 18.84 109.156 18.1733 109.156 17.34C109.156 16.5 109.422 15.8333 109.956 15.34C110.489 14.8467 111.116 14.6 111.836 14.6C112.562 14.6 113.179 14.82 113.686 15.26C114.192 15.6933 114.446 16.2933 114.446 17.06V17.83ZM110.276 16.95H113.326C113.326 16.5033 113.186 16.16 112.906 15.92C112.626 15.68 112.279 15.56 111.866 15.56C111.459 15.56 111.092 15.6867 110.766 15.94C110.439 16.1867 110.276 16.5233 110.276 16.95ZM117.847 20.08C117.174 20.08 116.587 19.8267 116.087 19.32C115.587 18.8133 115.337 18.1467 115.337 17.32C115.337 16.4933 115.594 15.8333 116.107 15.34C116.621 14.8467 117.231 14.6 117.937 14.6C118.651 14.6 119.224 14.9 119.657 15.5V12.58H120.777V20H119.657V19.2C119.244 19.7867 118.641 20.08 117.847 20.08ZM116.457 17.37C116.457 17.8767 116.621 18.29 116.947 18.61C117.274 18.93 117.657 19.09 118.097 19.09C118.537 19.09 118.911 18.93 119.217 18.61C119.524 18.2833 119.677 17.8667 119.677 17.36C119.677 16.8533 119.524 16.43 119.217 16.09C118.911 15.75 118.534 15.58 118.087 15.58C117.641 15.58 117.257 15.75 116.937 16.09C116.617 16.43 116.457 16.8567 116.457 17.37ZM123.516 20H122.396V14.68H123.516V20ZM122.466 13.62C122.326 13.48 122.256 13.3133 122.256 13.12C122.256 12.9267 122.326 12.76 122.466 12.62C122.606 12.48 122.773 12.41 122.966 12.41C123.159 12.41 123.326 12.48 123.466 12.62C123.606 12.76 123.676 12.9267 123.676 13.12C123.676 13.3133 123.606 13.48 123.466 13.62C123.326 13.76 123.159 13.83 122.966 13.83C122.773 13.83 122.606 13.76 122.466 13.62ZM126.26 17.12V20H125.14V14.68H126.26V15.65C126.44 15.3233 126.687 15.0667 127 14.88C127.32 14.6933 127.663 14.6 128.03 14.6C128.63 14.6 129.113 14.7833 129.48 15.15C129.853 15.5167 130.04 16.0467 130.04 16.74V20H128.92V17.08C128.92 16.1 128.513 15.61 127.7 15.61C127.313 15.61 126.977 15.74 126.69 16C126.403 16.2533 126.26 16.6267 126.26 17.12Z"
        //     fill="white"
        //   />
        //   <path
        //     d="M12.5667 13.5347H10.3536C10.2554 13.5347 10.1758 13.6143 10.1758 13.7125V20.8222C10.1758 20.9205 10.2554 21 10.3536 21H12.5667C12.6649 21 12.7445 20.9205 12.7445 20.8222V13.7125C12.7445 13.6143 12.6649 13.5347 12.5667 13.5347Z"
        //     fill="white"
        //   />
        //   <path
        //     d="M11.4604 10C10.6551 10 10 10.6544 10 11.4588C10 12.2635 10.6551 12.9181 11.4604 12.9181C12.265 12.9181 12.9196 12.2635 12.9196 11.4588C12.9196 10.6544 12.265 10 11.4604 10Z"
        //     fill="white"
        //   />
        //   <path
        //     d="M18.1969 13.3574C17.308 13.3574 16.6509 13.7395 16.2524 14.1737V13.7119C16.2524 13.6137 16.1728 13.5341 16.0746 13.5341H13.9552C13.8569 13.5341 13.7773 13.6137 13.7773 13.7119V20.8217C13.7773 20.9199 13.8569 20.9995 13.9552 20.9995H16.1634C16.2616 20.9995 16.3412 20.9199 16.3412 20.8217V17.304C16.3412 16.1186 16.6632 15.6568 17.4895 15.6568C18.3894 15.6568 18.4609 16.3972 18.4609 17.365V20.8217C18.4609 20.9199 18.5405 20.9995 18.6388 20.9995H20.8478C20.9461 20.9995 21.0257 20.9199 21.0257 20.8217V16.9219C21.0257 15.1593 20.6896 13.3574 18.1969 13.3574Z"
        //     fill="white"
        //   />
        //
        // </svg>
        <BsLinkedin
          className="text-7xl"
          style={{ color: "#0077B5", display: "none" }}
          // onClick={facebookSignUp}
          onClick={this.showPopup()}
        />
      );
    return (
      <div>
        {loggedIn && user !== {} ? contentWhenLoggedIn : contentWhenLoggedOut}
      </div>
    );
  }
}

export default LinkedInUI;