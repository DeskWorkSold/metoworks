import React, {
  useState,
  Component,
  useEffect,
  useRef,
  useCallback,
} from "react";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import { getDroppedOrSelectedFiles } from "html5-file-selector";
import {
  Container,
  Button,
  Row,
  Col,
  Image,
  Form,
  FormCheck,
} from "react-bootstrap";
import {
  BsBookmark,
  BsCoin,
  BsPencilSquare,
  BsReceipt,
  BsReceiptCutoff,
} from "react-icons/bs";
import { BiEdit } from "@react-icons/all-files/bi/BiEdit";
import { ImBin } from "@react-icons/all-files/im/ImBin";
import Table from "react-bootstrap/Table";

import { AiOutlinePlusCircle } from "@react-icons/all-files/ai/AiOutlinePlusCircle";
import {
  faEarth,
  faHome,
  faLocationDot,
  faUserClock,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import axios from "../../../utils/axios.api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Language } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import ModelComponents from "../ModelComponents/ModelComponents";
import { duration, FormGroup, Stack, Switch, Typography } from "@mui/material";
import { styled } from "@mui/material";
// import { Buffer } from 'buffer'

export const FreelanceProfileView = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShowDelete, setModalShowDelete] = React.useState(false);
  const [modalShowEducation, setModalShowEducation] = React.useState(false);
  const [modalShowEducationDelete, setModalShowEducationDelete] =
    React.useState(false);
  const [modalShowAchievement, setModalShowAchievement] = React.useState(false);
  const [modalShowAchievementDelete, setModalShowAchievementDelete] =
    React.useState(false);
  const [modalShowLanguage, setModalShowLanguage] = React.useState(false);
  const [modalShowLanguageDelete, setModalShowLanguageDelete] =
    React.useState(false);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show8, setShow8] = useState(false);
  const [show9, setShow9] = useState(false);
  const [show10, setShow10] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);
  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);
  const handleClose6 = () => setShow6(false);
  const handleShow6 = () => setShow6(true);
  const handleClose7 = () => setShow7(false);
  const handleShow7 = () => setShow7(true);
  const handleClose8 = () => setShow8(false);
  const handleShow8 = () => setShow8(true);
  const handleClose9 = () => setShow9(false);
  const handleShow9 = () => setShow9(true);
  const handleClose10 = () => setShow10(false);
  const handleShow10 = () => setShow10(true);
  const [userId, setUserId] = useState("");
  const [isModel, setIsModel] = useState("false");
  const [isSalaryRange, setIsSalaryRange] = useState({
    lte: "",
    gte: "",
  });
  const [durationData, setDurationData] = useState({
    gte: "",
    lte: "",
  });
  // console.log(durationData, 'durationData');
  const [checked, setChecked] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  // console.log(userId, "ID");
  const [isCheckBox, setIsCheckBox] = useState("false");
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    visaPermit: "",
    idCard: "",
    gender: "",
    isIdCardPublic: "",
    aboutMe: "",
    phoneNumber: "",
    dob: "",
    country: "",
    city: "",
    address: "",
    state: "",
    salaryRange: {
      gte: "",
      lte: "",
    },
  });
  const [isIdPublic, setIdPublic] = useState(profileData?.isIdCardPublic);
  const [profileExp, setProfileExp] = useState({});
  const [experienceId, setExperienceId] = useState("");
  const [editProfileExp, setEditProfileExp] = useState({});
  const [isEducation, setIsEducation] = useState({});
  const [isAchievement, setIsAchievement] = useState({});
  const [isLanguage, setIsLanguage] = useState({});
  const [isEducationData, setIsEducationData] = useState({});
  const [isAchievementData, setIsAchievementData] = useState({});
  const [isExperienceData, setIsExperienceData] = useState({});
  const [isEditExperienceData, setEditIsExperienceData] = useState({
    id: experienceId,
    title: "",
    companyName: "",
    jobIndustry: "",
    jobFunction: "",
    isCurrent: isChecked,
    duration: {
      gte: durationData.gte,
      lte: durationData.lte,
    },
    description: "",
  });
  const [isEditEducationData, setEditIsEducationeData] = useState({
    duration: {
      gte: durationData.gte,
      lte: durationData.lte,
    },
  });
  const [isLanguageData, setIsLanguageData] = useState({});
  const [isEditAchievementData, setIsEditAchievementData] = useState({});
  const [isEditLanguageData, setIsEditLanguageData] = useState({});
  const [isCv, setIsCv] = useState("");

  const [profileImg, setProfileImg] = useState("");
  const navigate = useNavigate();

  // console.log(profileExp, "daaaaaaaaaataaaaaaaaaaaa");
  // console.log(profileData, "profileData");
  // console.log(isEditLanguageData, "isEditLanguageData");
  // <<<<<<< HEAD
  // console.log(profImg, 'cvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv');
  // console.log(profImg, "cvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv");
  // >>>>>>> 68b259780b29502607921aefd10965f6add7a1ed

  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 15,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(12px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#39BEC1" : "#4dd5d8",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,.35)"
          : "rgba(0,0,0,.25)",
      boxSizing: "border-box",
    },
  }));

  useEffect(() => {
    checkAuth();
    setUserId();
    initialFun();
    // ProfileExpData(id);
    // educationData(id);
    achievementData();
    LanguageData();
  }, []);

  const checkAuth = async () => {
    const token = await localStorage.getItem("access-token");
    if (!token) {
      navigate("/login");
    }
  };

  useEffect(() => {
    isEducationData &&
      isEducationData.length > 0 &&
      setEditIsEducationeData(isEducationData);
  }, [isEducationData]);

  useEffect(() => {
    isEducationData &&
      isEducationData.length > 0 &&
      setEditIsEducationeData(isEducationData);
  }, [isEducationData]);

  useEffect(() => {
    isExperienceData &&
      isExperienceData.length > 0 &&
      setEditIsExperienceData(isExperienceData);
  }, [isExperienceData]);

  useEffect(() => {
    isAchievementData &&
      isAchievementData.length > 0 &&
      setIsEditAchievementData(isAchievementData);
  }, [isAchievementData]);

  useEffect(() => {
    isLanguageData &&
      isLanguageData.length > 0 &&
      setIsEditLanguageData(isLanguageData);
  }, [isLanguageData]);

  // console.log(profileImg);

  const initialFun = (id) => {
    axios
      .get(`/api/v1/user/freelancer`)
      .then((res) => {
        // console.log(res, "Initial Data");
        let data = res.data;
        console.log(data, "daaaaaaaaataaaaaaaaaaaa");
        // setIsProfileData(data)
        setProfileData(data);
        setIsExperienceData(data.data.experience);
        setIsAchievementData(data.data.achievement);
        setIsEducationData(data.data.education);
        setIsLanguageData(data.data.language);
        // setProfileImg(data.data.files.thumbnail)
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`api/v1/user/asset/cv`,)
      .then((res) => {
        // console.log(res, "Initial Data");
        const file = new Blob([res]);
        const fileURL = URL.createObjectURL(file);
        // let data = res.data;
        // console.log(fileURL, 'cvvvvvvvvvvvvvvvvvvvv');
        // setIsProfileData(data)
        setIsCv(fileURL);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`api/v1/user/asset/thumbnail`, { responseType: "arraybuffer" })
      .then((res) => {
        let buffer = require("buffer");
        const data = `data:${
          res.headers["content-type"]
        };base64,${new buffer.Buffer(res.data, "binary").toString("base64")}`;
        console.log("res", res);
        console.log("imagee", data);
        setProfileImg(data);
         localStorage.setItem('profileImg', data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const profileFunc = () => {
    let isData = {
      firstName: profileData.firstName,
      lastName: profileData.lastName,
      visaPermit: profileData.visaPermit,
      idCard: profileData.idCard,
      gender: profileData.gender,
      isIdCardPublic: profileData.isIdCardPublic,
      aboutMe: profileData.aboutMe,
      phoneNumber: profileData.phoneNumber,
      dob: profileData.dob,
      country: profileData.country,
      city: profileData.city,
      address: profileData.address,
      state: profileData.state,
      salaryRange: {
        gte: isSalaryRange.gte,
        lte: isSalaryRange.lte,
      },
    };
    console.log(isData, "Dataaaaaaaaaaaaa");
    if (isData) {
      let formdata = new FormData();
      Object.entries(profileData).map(([key, value]) => {
        formdata.append(key, value);
      });
      axios
        .post(`api/v1/user/freelancer`, formdata)
        .then((res) => {
          // console.log(formdata);
          // console.log(res, "profile data successfully added");
          setProfileData(res.data);
          if (res.data) {
            setShow(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const ProfileExp = () => {
    axios
      .post(`http://localhost:3000/v1/freelancerExp`, {
        ...profileExp,
        uid: userId,
      })
      .then((res) => {
        console.log(res, "profile data successfully added");
        // setProfileExp(res.data, "ProfileExp");
        // ProfileExpData(userId);
        if (res) {
          setShow1(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const ProfileExpData = (id) => {
  //   console.log(id, "iddd");
  //   axios
  //     .get(`http://localhost:3000/v1/freelancerExp/${id}`)
  //     .then((res) => {
  //       // console.log(res.data.data,"res")
  //       // console.log(res, "ProfileExpData");
  //       let data = Object.values(res.data.data);
  //       setIsExperienceData(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  // console.log(editIsExperienceData1, 'editIsExperienceData1');

  // console.log(isExperienceData, 'isExperienceData');

  const deleteExperienceData = (id) => {
    axios
      .delete(`http://localhost:3000/v1/freelancerExp/${id}`)
      .then((res) => {
        let data = Object.values(res.data.data);
        // setIsLanguageData(data);
        if (data) {
          // ProfileExpData(userId);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const checkBoxHandleChange = () => {
    if (isCheckBox === "true") {
      // alert('checkbox is false')
      setIsCheckBox("false");
      setProfileExp({ ...profileExp, currentlyWorking: "off" });
    } else {
      // alert('checkbox is true')
      setIsCheckBox("true");
      setProfileExp({ ...profileExp, currentlyWorking: "on" });
    }
  };

  const educationFunc = () => {
    let formdata = new FormData();
    Object.entries(isEducation).map(([key, value]) => {
      formdata.append(key, value);
    });
    axios
      .post(`http://localhost:3000/v1/education`, formdata)
      .then((res) => {
        // console.log(res, "profile data successfully added");
        setProfileExp(res.data);
        if (res) {
          setShow2(false);
        }
        // ProfileExpData()
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const educationData = (id) => {
  //   axios
  //     .get(`http://localhost:3000/v1/education/${id}`)
  //     .then((res) => {
  //       let data = Object.values(res.data.data);
  //       setIsEducationData(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const deleteEducationData = (id) => {
    axios
      .delete(`http://localhost:3000/v1/education/${id}`)
      .then((res) => {
        let data = Object.values(res.data.data);
        // setIsLanguageData(data);
        if (data) {
          // educationData(userId)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const achievementFunc = () => {
    let formdata = new FormData();
    Object.entries(isAchievement).map(([key, value]) => {
      formdata.append(key, value);
    });
    axios
      .post(`http://localhost:3000/v1/achievement`, formdata)
      .then((res) => {
        console.log(res, "profile data successfully added");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const achievementData = (id) => {
    axios
      .get(`http://localhost:3000/v1/achievement/${id}`)
      .then((res) => {
        let data = Object.values(res.data.data);
        setIsAchievementData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateAchievementData = (id) => {
    if (!isEditAchievementData.file) {
      let formdata = new FormData();
      Object.entries(isEditAchievementData).map(([key, value]) => {
        formdata.append(key, value);
      });
      axios
        .put(`api/v1/user/freelancer/asset/achievement-cert?id=${id}`, formdata)
        .then((res) => {
          // alert(isEditExperienceData.profession)
          // console.log(res, "education edit data successfully added");
          if (res) {
            setShow7(false);
            achievementData(userId);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .put(
          `api/v1/user/freelancer/asset/achievement-cert?id=${id}`,
          isEditAchievementData
        )
        .then((res) => {
          // alert(isEditExperienceData.profession)
          console.log(res, "education edit data successfully added");
          if (res) {
            setShow7(false);
            achievementData(userId);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const deleteAchievementData = (id) => {
    axios
      .delete(`http://localhost:3000/v1/achievement/${id}`)
      .then((res) => {
        let data = Object.values(res.data.data);
        if (data) {
          achievementData(userId);
        }
        // setIsLanguageData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // console.log(isEditExperienceData,"edit")

  const LanguageFunc = () => {
    axios
      .post(`http://localhost:3000/v1/language`, isLanguage)
      .then((res) => {
        console.log(res, "profile data successfully added");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const LanguageData = (id) => {
    axios
      .get(`http://localhost:3000/v1/language/${id}`)
      .then((res) => {
        let data = Object.values(res.data.data);
        setIsLanguageData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateLanguageData = (id) => {
    axios
      .put(`http://localhost:3000/v1/language/${id}`, isEditLanguageData)
      .then((res) => {
        // alert(isEditExperienceData.profession)
        // console.log(res, "profile edit data successfully added");
        if (res) {
          setShow8(true);
          LanguageData(userId);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteLanguageData = (id) => {
    axios
      .delete(`http://localhost:3000/v1/language/${id}`)
      .then((res) => {
        // let data = Object.values(res.data.data);
        // setIsLanguageData(data);
        if (res) {
          LanguageData(userId);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const FileUploadComponent = () => {
    // alert('clicked')s
    const fileParams = ({ meta }) => {
      return { url: "https://httpbin.org/post" };
    };
    const onFileChange = ({ meta, file }, status) => {
      console.log(status, meta, file);
    };
    const onSubmit = (files, allFiles) => {
      allFiles.forEach((f) => f.remove());
    };
    const getFilesFromEvent = (e) => {
      return new Promise((resolve) => {
        getDroppedOrSelectedFiles(e).then((chosenFiles) => {
          resolve(chosenFiles.map((f) => f.fileObject));
        });
      });
    };
    const selectFileInput = ({ accept, onFiles, files, getFilesFromEvent }) => {
      const textMsg = files.length > 0 ? "Upload Again" : "Select Files";
      return (
        <label>
          <Image
            onClick={() => FileUploadComponent()}
            style={{ width: "100%", height : '100%' , borderRadius : '100%' }}
            src={profileImg}
          />
          <input
            style={{ display: "none" }}
            type="file"
            accept={accept}
            multiple
            onChange={(e) => {
              getFilesFromEvent(e).then((chosenFiles) => {
                onFiles(chosenFiles);
              });
            }}
          />
        </label>
      );
    };
    return (
      <Dropzone
        onSubmit={onSubmit}
        onChangeStatus={onFileChange}
        InputComponent={selectFileInput}
        getUploadParams={fileParams}
        getFilesFromEvent={getFilesFromEvent}
        accept="image/*"
        maxFiles={1}
        inputContent="Drop A File"
      />
    );
  };

  const HandleVisaPermitChange = (event) => {
    // console.log(event, 'chekeeeeeeeeeeeed');
    setChecked(checked ? false : true);
  };

  const HandleIsConfirm = (event) => {
    // console.log(event, 'chekeeeeeeeeeeeed');
    setIsChecked(isChecked ? false : true);
  };

  useEffect(() => {
    if (checked) {
      setProfileData({ ...profileData, isIdCardPublic: true });
    } else {
      setProfileData({ ...profileData, isIdCardPublic: false });
    }
  }, [checked]);

  useEffect(() => {
    if (isChecked) {
      setProfileData({ ...profileData, isCurrent: true });
    } else {
      setProfileData({ ...profileData, isCurrent: false });
    }
  }, [isChecked]);
  // experience edit & delete

  // console.log(isEditExperienceData,"editttt")

  const MyVerticallyCenteredModal = useCallback(
    (props) => {
      // const [isChecked,setIsChecked] = useState(false)
      const editIsExperienceData1 = {
        title: "",
        companyName: "",
        jobIndustry: "",
        jobFunction: "",
        isCurrent: isChecked,
        description: "",
      };
      console.log(editIsExperienceData1, "titlllllllllllllllle");

      const updateProfileExp = () => {
        let newData = [...isExperienceData];

        const expData = {
          id: experienceId,
          title: editIsExperienceData1.title
            ? editIsExperienceData1.title
            : isEditExperienceData.title,
          companyName: editIsExperienceData1.companyName
            ? editIsExperienceData1.companyName
            : isEditExperienceData.companyName,
          jobIndustry: editIsExperienceData1.jobIndustry
            ? editIsExperienceData1.jobIndustry
            : isEditExperienceData.jobIndustry,
          jobFunction: editIsExperienceData1.jobFunction
            ? editIsExperienceData1.jobFunction
            : isEditExperienceData.jobFunction,
          isCurrent: editIsExperienceData1.isCurrent
            ? editIsExperienceData1.isCurrent
            : isEditExperienceData.isCurrent,
          duration: {
            gte: durationData.gte
              ? durationData.gte
              : isEditExperienceData.duration.gte,
            lte: durationData.lte
              ? durationData.lte
              : isEditExperienceData.duration.lte,
          },
          description: editIsExperienceData1.description
            ? editIsExperienceData1.description
            : isEditExperienceData.description,
        };

        newData = newData.filter((e, i) => {
          return e.id !== expData.id;
        });
        newData.push(expData);
        console.log(newData, "newDaataaa");

        // let arrayData = [isEditExperienceData]
        // const newData = [isEditExperienceData]?.filter((x) => x?.id != experienceId);
        // newData?.push(expData);
        // console.log(newData,"data")

        axios
          .post(`api/v1/user/freelancer`, { experience: newData })
          .then((res) => {
            // console.log(res.data, 'eeeeeeeeeeeeee');
            let data = res.data;
            console.log(res, "profile edit data successfully added");
            // ProfileExpData(userId);
            if (data) {
              setShow5(false);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };

      return (
        <div>
          <Modal
            id="modal"
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title style={{ color: "black" }}>
                Edit Experience
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <div className="p-3">
                  <Col lg="12">
                    <fieldset>
                      <label className="text-lg" style={{ width: "100%" }}>
                        Profession
                      </label>
                      <input
                        style={{ width: "100%" }}
                        className="form-control"
                        name="fname"
                        type={"text"}
                        placeholder={props?.props?.title}
                        onChange={(e) =>
                          (editIsExperienceData1.title = e.target.value)
                        }
                        //   value={user.number}
                        //   onChange={getUserData}
                      />
                    </fieldset>
                  </Col>
                  <Col lg="12">
                    <fieldset>
                      <label className="text-lg" style={{ width: "100%" }}>
                        Company Name
                      </label>
                      <input
                        style={{ width: "100%" }}
                        className="form-control"
                        name="lname"
                        placeholder={props?.props?.companyName}
                        onChange={(e) =>
                          (editIsExperienceData1.companyName = e.target.value)
                        }
                        //   onChange={getUserData}
                      />
                    </fieldset>
                  </Col>
                  <Col lg="12">
                    <fieldset>
                      <label className="text-lg" style={{ width: "100%" }}>
                        Job Industry
                      </label>
                      <Form.Select
                        aria-label="Default select example"
                        value={props?.props?.jobIndustry}
                        onChange={(e) =>
                          (editIsExperienceData1.jobIndustry = e.target.value)
                        }
                      >
                        <option hidden="">Job Industry</option>
                        <option>Universities / Education</option>
                        <option>Manufacturing</option>
                        <option>Security</option>
                        <option>Real Estate</option>
                        <option>
                          Professional Consultings (Legal, HR, Finance etc.)
                        </option>
                        <option>Banking and Finance</option>
                        <option>
                          Beauty Care and Health / Welness / Fitness
                        </option>
                        <option>Government / Public Utilities</option>
                        <option>
                          Hospitality / Travel / Airlines / Clubhouse
                        </option>
                        <option>
                          IT / R&amp;D / Cyber Security / Telecommunication /
                          Science
                        </option>
                        <option>Retail</option>
                        <option>Insurance</option>
                        <option>
                          Logistics / Transportaton / Supply Chain
                        </option>
                        <option>F&amp;B / Wine &amp; Spriits</option>
                        <option>
                          Logistics / Transportaton / Supply Chain
                        </option>
                        <option>Medical / Pharmacy / Hospital</option>
                        <option>Engineerings</option>
                        <option>Others</option>
                      </Form.Select>
                    </fieldset>
                  </Col>
                  <Col lg="12">
                    <fieldset>
                      <label className="text-lg" style={{ width: "100%" }}>
                        Job Function
                      </label>
                      <Form.Select
                        aria-label="Default select example"
                        value={props?.props?.jobFunction}
                        onChange={(e) =>
                          (editIsExperienceData1.jobFunction = e.target.value)
                        }
                      >
                        <option hidden="">Job Function</option>
                        <option>HR &amp; Admin</option>
                        <option>General Management</option>
                        <option>Finance and Accounting</option>
                        <option>Sales and Marketing</option>
                        <option>
                          Banking and Financial Institue Professionals
                        </option>
                        <option>
                          Insurance Professionals (back-end functions)
                        </option>
                        <option>IT Professionals (Specific Fields)</option>
                        <option>Manufacturing</option>
                        <option>
                          Real Estate (Surveyers / reasearchers etc.)
                        </option>
                        <option>Finance and Accounting</option>
                        <option>Professional Designers</option>
                        <option>Lecturers / Teachers</option>
                        <option>Engineering / Architect</option>
                        <option>Others</option>
                      </Form.Select>
                    </fieldset>
                  </Col>
                  <Row>
                    <Col lg="12" className="pt-3">
                      <span
                        style={{
                          display: "inline-flex",
                          color: "#7A7979",
                        }}
                      >
                        <FormCheck
                          id="check"
                          color="blue"
                          // onChange={checkBoxHandleChange}
                          defaultChecked={props?.props?.isCurrent}
                          checked={isChecked}
                          onClick={(event) => HandleIsConfirm(event)}
                        />
                        &#160;&#160;I am currently working in this role
                      </span>
                    </Col>
                    <Col lg="6">
                      <fieldset>
                        <label
                          className="text-lg"
                          style={{
                            width: "100%",
                          }}
                        >
                          Start Date
                        </label>
                        <input
                          style={{
                            width: "100%",
                          }}
                          value={props?.props?.startDate}
                          className="form-control"
                          name="email"
                          type={"date"}
                          onChange={(e) =>
                            setDurationData({
                              ...durationData,
                              gte: e.target.value,
                            })
                          }
                          //   value={user.number}
                          //   onChange={getUserData}
                          placeholder="A Service Like No Other"
                        />
                      </fieldset>
                    </Col>
                    <Col lg="6">
                      <fieldset>
                        <label
                          className="text-lg"
                          style={{
                            width: "100%",
                          }}
                        >
                          End Date
                        </label>

                        <input
                          style={{
                            width: "100%",
                          }}
                          className="form-control"
                          type={"date"}
                          name="firstname"
                          value={props?.props?.endDate}
                          onChange={(e) =>
                            setDurationData({
                              ...durationData,
                              lte: e.target.value,
                            })
                          }
                          //   value={user.name}
                          //   onChange={getUserData}
                          placeholder="Gia (PVT) LTD"
                          required
                        />
                      </fieldset>
                    </Col>
                    <Col lg="12">
                      <fieldset>
                        <label
                          className="text-lg"
                          style={{
                            width: "100%",
                          }}
                        >
                          Description
                        </label>

                        <textarea
                          // placeholder="Description"
                          className="form-control"
                          placeholder={props?.props?.description}
                          onChange={(e) =>
                            (editIsExperienceData1.description = e.target.value)
                          }
                        />
                      </fieldset>
                    </Col>
                  </Row>
                </div>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button
                style={{ background: "none", color: "#C1C1C1" }}
                onClick={props.onHide}
              >
                Cancel
              </Button>

              <Button
                style={{ background: "none", color: "#39BEC1" }}
                // onClick={props.post}
                onClick={() => updateProfileExp()}
              >
                Send
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    },
    [isEditExperienceData, isChecked]
  );

  const modalshow = (event) => {
    // alert('error')
    // console.log(event, "funtion event");
    if (event.clicked == true) {
      event.clicked = false;
      setModalShow(false);
    } else {
      setModalShow(true);
      event.clicked = true;
    }
  };

  const btnEdit = (event) => {
    modalshow(event);
    setEditIsExperienceData(event);
    setExperienceId(event.id);
  };

  const deleteEducationsProfileData = (props) => {
    // console.log(props?.props?.id);
    const newData = isEducationData?.filter((x) => x?.id != props.props.id);
    axios
      .post(`api/v1/user/freelancer`, { experience: newData })
      .then((res) => {
        // console.log(res.data, 'eeeeeeeeeeeeee');
        let data = res.data;
        console.log(res, "profile edit data successfully added");
        // ProfileExpData(userId);
        if (data) {
          setShow5(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // delete
  function MyVerticallyCenteredModalDelete(props) {
    // console.log(props, "proooooooooops");
    return (
      <div>
        <Modal
          id="modal"
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "black" }}>
              Delete Experience
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <div className="p-3">Are you sure you want to Delete ?</div>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button
              style={{ background: "none", color: "#C1C1C1" }}
              onClick={props.onHide}
            >
              Cancel
            </Button>

            <Button
              style={{ background: "none", color: "#39BEC1" }}
              onClick={() => deleteEducationsProfileData(props)}
            >
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  const modalshow1 = (event) => {
    // console.log(event, "funtion event");
    if (event.clicked == true) {
      event.clicked = false;
      setModalShowDelete(false);
    } else {
      setModalShowDelete(true);
      event.clicked = true;
    }
  };

  const btnDelete = (event) => {
    modalshow1(event);
    // setEditIsExperienceData(event);
  };
  // experience edit & delete End

  // Education edit & delete
  // edit
  const MyVerticallyCenteredModalEducation = useCallback(
    (props) => {
      // console.log(props, "proooooooooops");

      const editIsEducationData = {
        id: props.id,
        educationLevel: "",
        institute: "",
        major: "",
        isCurrentlyWorking: false,
        duration: {
          gte: durationData.gte,
          lte: durationData.lte,
        },
      };

      const CertificationData = {
        certificate: "",
      };
      // console.log(isEditEducationData, 'isEditEducationData');
      const updateEducationData = (id) => {
        let EducationData = {
          id: isEditEducationData.id,
          educationLevel: editIsEducationData.educationLevel
            ? editIsEducationData.educationLevel
            : isEditEducationData.educationLevel,
          institute: editIsEducationData.institute
            ? editIsEducationData.institute
            : isEditEducationData.institute,
          major: editIsEducationData.major
            ? editIsEducationData.major
            : isEditEducationData.major,
          isCurrentlyWorking: false,
          duration: {
            gte: durationData.gte
              ? durationData.gte
              : isEditEducationData.duration.gte,
            lte: durationData.lte
              ? durationData.lte
              : isEditEducationData.duration.lte,
          },
          certificate: isEditEducationData.certificate,
        };
        // console.log(EducationData, 'EducationData');

        if (CertificationData.certificate) {
          const formdata = new FormData();
          formdata.append("education-cert", CertificationData.certificate);
          axios
            .put(
              `api/v1/user/freelancer/asset/education-cert?id=${props.props.id}`,
              formdata
            )
            .then((res) => {
              console.log("education edit data successfully added");
              if (res) {
                setShow6(false);
                initialFun();
              }
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          let newData = [...isEducationData];

          newData = newData.filter((e, i) => {
            return e.id !== EducationData.id;
          });
          newData.push(EducationData);
          console.log(newData, "newDaataaa");
          // console.log(isEditEducationData, 'dataaaaaaaaaaaaaaaaaaa');
          axios
            .post(`api/v1/user/freelancer`, { education: newData })
            .then((res) => {
              // alert(isEditExperienceData.profession)
              // console.log(res, "education edit data successfully added");
              if (res) {
                setShow6(false);
                initialFun();
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      };

      return (
        <div>
          <Modal
            id="modal"
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title style={{ color: "black" }}>
                Edit Education
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <div className="p-3">
                  <Col lg="12">
                    <fieldset>
                      <label className="text-lg" style={{ width: "100%" }}>
                        Education Level
                      </label>
                      <Form.Select
                        aria-label="please select education level"
                        onChange={(e) =>
                          (editIsEducationData.educationLevel = e.target.value)
                        }
                      >
                        <option
                          selected={
                            isEditEducationData?.educationLevel ===
                            "Education Level"
                              ? true
                              : false
                          }
                        >
                          Education Level
                        </option>
                        <option
                          selected={
                            isEditEducationData?.educationLevel ===
                            "Associate Degree"
                              ? true
                              : false
                          }
                        >
                          Associate Degree
                        </option>
                        <option
                          selected={
                            isEditEducationData?.educationLevel ===
                            "Bachelor Degree"
                              ? true
                              : false
                          }
                        >
                          Bachelor Degree
                        </option>
                        <option
                          selected={
                            isEditEducationData?.educationLevel ===
                            "Master Degree"
                              ? true
                              : false
                          }
                        >
                          Master Degree
                        </option>
                        <option
                          selected={
                            isEditEducationData?.educationLevel ===
                            "Doctorate Degree"
                              ? true
                              : false
                          }
                        >
                          Doctorate Degree
                        </option>
                        <option
                          selected={
                            isEditEducationData?.educationLevel === "PhD"
                              ? true
                              : false
                          }
                        >
                          PhD
                        </option>
                        <option
                          selected={
                            isEditEducationData?.educationLevel === "Others"
                              ? true
                              : false
                          }
                        >
                          Others
                        </option>
                      </Form.Select>
                    </fieldset>
                  </Col>
                  <Col lg="12">
                    <fieldset>
                      <label className="text-lg" style={{ width: "100%" }}>
                        Institute
                      </label>
                      <input
                        style={{ width: "100%" }}
                        className="form-control"
                        name="institute"
                        type={"text"}
                        onChange={(e) =>
                          (editIsEducationData.institute = e.target.value)
                        }
                        //   value={user.number}
                        //   onChange={getUserData}
                        placeholder={isEditEducationData?.institute}
                      />
                    </fieldset>
                  </Col>
                  <Col lg="12">
                    <fieldset>
                      <label className="text-lg" style={{ width: "100%" }}>
                        Major
                      </label>
                      <Form.Select
                        aria-label="Default select example"
                        onChange={(e) =>
                          (editIsEducationData.major = e.target.value)
                        }
                      >
                        <option
                          selected={
                            isEditEducationData?.major === "Major"
                              ? true
                              : false
                          }
                        >
                          Major
                        </option>
                        <option
                          selected={
                            isEditEducationData?.major === "Masters of Law"
                              ? true
                              : false
                          }
                        >
                          Masters of Law
                        </option>
                        <option
                          selected={
                            isEditEducationData?.major === "Computer Science"
                              ? true
                              : false
                          }
                        >
                          Computer Science
                        </option>
                        <option
                          selected={
                            isEditEducationData?.major === "Phsycology"
                              ? true
                              : false
                          }
                        >
                          Phsycology
                        </option>
                      </Form.Select>
                    </fieldset>
                  </Col>

                  <Row>
                    <Col lg="6">
                      <fieldset>
                        <label
                          className="text-lg"
                          style={{
                            width: "100%",
                          }}
                        >
                          Start Date
                        </label>
                        <input
                          style={{
                            width: "100%",
                          }}
                          className="form-control"
                          name="email"
                          type={"date"}
                          value={isEditEducationData?.startingDate}
                          onChange={(e) =>
                            setDurationData({
                              ...durationData,
                              gte: e.target.value,
                            })
                          }
                          //   value={user.number}
                          //   onChange={getUserData}
                          placeholder="A Service Like No Other
                "
                        />
                      </fieldset>
                    </Col>
                    <Col lg="6">
                      <fieldset>
                        <label
                          className="text-lg"
                          style={{
                            width: "100%",
                          }}
                        >
                          End Date
                        </label>

                        <input
                          style={{
                            width: "100%",
                          }}
                          className="form-control"
                          type={"date"}
                          name="firstname"
                          value={isEditEducationData?.endingDate}
                          onChange={(e) =>
                            setDurationData({
                              ...durationData,
                              lte: e.target.value,
                            })
                          }
                          //   value={user.name}
                          //   onChange={getUserData}
                          placeholder="Gia (PVT) LTD"
                          required
                        />
                      </fieldset>
                    </Col>
                    <Col lg="6">
                      <fieldset>
                        <label
                          className="text-lg"
                          style={{
                            width: "100%",
                          }}
                        >
                          Upload Certification
                        </label>

                        <input
                          type="file"
                          class="form-control"
                          id="customFile"
                          onChange={(e) => {
                            CertificationData.certificate = e.target.files[0];
                          }}
                        />
                      </fieldset>
                    </Col>
                  </Row>
                </div>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button
                style={{ background: "none", color: "#C1C1C1" }}
                onClick={props.onHide}
              >
                Cancel
              </Button>

              <Button
                style={{ background: "none", color: "#39BEC1" }}
                onClick={() => updateEducationData()}
              >
                Send
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    },
    [isEditEducationData]
  );

  const modalshow2 = (event) => {
    console.log(event, "funtion event");
    if (event.clicked == true) {
      event.clicked = false;
      setModalShowEducation(false);
    } else {
      setModalShowEducation(true);
      event.clicked = true;
    }
  };

  const btnEducationEdit = (event) => {
    modalshow2(event);
    setEditIsEducationeData(event);
  };
  // delete
  function MyVerticallyCenteredModalEducationDelete(props) {
    // console.log(props, "proooooooooops");
    return (
      <div>
        <Modal
          id="modal"
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "black" }}>
              Delete Education
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <div className="p-3">jhggff</div>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button
              style={{ background: "none", color: "#C1C1C1" }}
              onClick={props.onHide}
            >
              Cancel
            </Button>

            <Button
              style={{ background: "none", color: "#39BEC1" }}
              onClick={props.post}
            >
              Send
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  const modalshow3 = (event) => {
    console.log(event, "funtion event");
    if (event.clicked == true) {
      event.clicked = false;
      setModalShowEducationDelete(false);
    } else {
      setModalShowEducationDelete(true);
      event.clicked = true;
    }
  };

  const btnEducationDelete = (event) => {
    modalshow3(event);
    // setEditIsExperienceData(event);
  };
  // Education edit & delete End

  // console.log(isEditExperienceData,"editttt")

  // Achievement edit & delete
  // edit
  const MyVerticallyCenteredModalAchievement = useCallback(
    (props) => {
      // const [isChecked,setIsChecked] = useState(false)
      const editIsAchievementData1 = {
        title: "",
        description: "",
      };

      const editIsAchievementCertificate = {
        certificate: "",
      };
      console.log(editIsAchievementData1, "editIsAchievementData1");

      const updateProfileExp = () => {
        const achData = {
          id: props.props.id,
          title: editIsAchievementData1.title
            ? editIsAchievementData1.title
            : props.props.title,
          description: editIsAchievementData1.description
            ? editIsAchievementData1.description
            : props.props.description,
        };
        console.log(achData, "achData");
        if (editIsAchievementCertificate.certificate) {
          const formdata = new FormData();
          formdata.append(
            "achievement-cert",
            editIsAchievementCertificate.certificate
          );
          axios
            .put(
              `api/v1/user/freelancer/asset/achievement-cert?id=${props.props.id}`,
              formdata
            )
            .then((res) => {
              console.log("education edit data successfully added");
              if (res) {
                setShow7(false);
                initialFun();
              }
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          let newData = [...isAchievementData];
          newData = newData.filter((e, i) => {
            return e.id !== achData.id;
          });
          newData.push(achData);
          console.log(newData, "newDaataaa");
          // console.log(isEditEducationData, 'dataaaaaaaaaaaaaaaaaaa');
          axios
            .post(`api/v1/user/freelancer`, { achievement: newData })
            .then((res) => {
              // alert(isEditExperienceData.profession)
              // console.log(res, "education edit data successfully added");
              if (res) {
                setShow7(false);
                initialFun();
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      };

      return (
        <div>
          <Modal
            id="modal"
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title style={{ color: "black" }}>
                Edit Achievements
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <div className="p-3">
                  <Col lg="12">
                    <fieldset>
                      <label className="text-lg" style={{ width: "100%" }}>
                        Title
                      </label>
                      <input
                        style={{ width: "100%" }}
                        className="form-control"
                        name="fname"
                        type={"text"}
                        //   value={user.number}
                        //   onChange={getUserData}
                        placeholder={props?.props?.title}
                        // onClick={(e) => setIsEditAchievementData({...isEditAchievementData, title : e.target.value})}
                        onChange={(e) =>
                          (editIsAchievementData1.title = e.target.value)
                        }
                      />
                    </fieldset>
                  </Col>
                  <Col lg="12">
                    <fieldset>
                      <label className="text-lg" style={{ width: "100%" }}>
                        Description
                      </label>
                      <textarea
                        placeholder={props?.props?.description}
                        className="form-control"
                        onChange={(e) =>
                          (editIsAchievementData1.description = e.target.value)
                        }
                      />
                    </fieldset>
                  </Col>
                  <Col lg="12">
                    <fieldset>
                      <label className="text-lg" style={{ width: "100%" }}>
                        Upload Certification
                      </label>
                      <input
                        type="file"
                        class="form-control"
                        id="customFile"
                        // value={isEditAchievementData?.achievement}
                        onChange={(e) =>
                          (editIsAchievementCertificate.certificate =
                            e.target.files[0])
                        }
                      />
                    </fieldset>
                  </Col>
                </div>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button
                style={{ background: "none", color: "#C1C1C1" }}
                onClick={props.onHide}
              >
                Cancel
              </Button>

              <Button
                style={{ background: "none", color: "#39BEC1" }}
                // onClick={props.post}
                onClick={() => updateProfileExp()}
              >
                Send
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    },
    [isAchievementData]
  );

  const modalshow5 = (event) => {
    // alert('error')
    // console.log(event, "funtion event");
    if (event.clicked == true) {
      event.clicked = false;
      setModalShowAchievement(false);
    } else {
      setModalShowAchievement(true);
      event.clicked = true;
    }
  };

  const btnAchieveEdit = (event) => {
    modalshow5(event);
    setIsEditAchievementData(event);
    setIsEditAchievementData(event.id);
  };

  // delete
  function MyVerticallyCenteredModalAchievementDelete(props) {
    // console.log(props, "proooooooooops");
    return (
      <div>
        <Modal
          id="modal"
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "black" }}>
              Delete Achievement
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <div className="p-3">jhggff</div>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button
              style={{ background: "none", color: "#C1C1C1" }}
              onClick={props.onHide}
            >
              Cancel
            </Button>

            <Button
              style={{ background: "none", color: "#39BEC1" }}
              onClick={props.post}
            >
              Send
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  const modalshow6 = (event) => {
    // console.log(event, "funtion event");
    if (event.clicked == true) {
      event.clicked = false;
      setModalShowAchievementDelete(false);
    } else {
      setModalShowAchievementDelete(true);
      event.clicked = true;
    }
  };

  const btnAchieveDelete = (event) => {
    modalshow6(event);
    // setEditIsExperienceData(event);
  };

  // Achievement edit & delete End

  // Language edit & delete
  // edit
  const MyVerticallyCenteredModalLanguage = useCallback(
    (props) => {
      // const [isChecked,setIsChecked] = useState(false)
      const editIsLangugeData1 = {
        languageType: "",
        examLevel: "",
        gradingLevel: "",
      };
      console.log(editIsLangugeData1, "editIsLangugeData1");

      const updateProfileExp = () => {
        let newData = [...isLanguageData];

        const langData = {
          id: props?.props?.id,
          languageType: editIsLangugeData1.languageType
            ? editIsLangugeData1.languageType
            : props.props.languageType,
          examLevel: editIsLangugeData1.examLevel
            ? editIsLangugeData1.examLevel
            : props.props.examLevel,
          gradingLevel: editIsLangugeData1.gradingLevel
            ? editIsLangugeData1.gradingLevel
            : props.props.gradingLevel,
        };

        console.log(langData, "langData");
        newData = newData.filter((e, i) => {
          return e.id !== langData.id;
        });
        newData.push(langData);
        console.log(newData, "newDaataaa");

        // let arrayData = [isEditExperienceData]
        // const newData = [isEditExperienceData]?.filter((x) => x?.id != experienceId);
        // newData?.push(expData);
        // console.log(newData,"data")

        axios
          .post(`api/v1/user/freelancer`, { language: newData })
          .then((res) => {
            // console.log(res.data, 'eeeeeeeeeeeeee');
            let data = res.data;
            console.log(res, "profile edit data successfully added");
            // ProfileExpData(userId);
            setShow7(false);
            initialFun();
          })
          .catch((err) => {
            console.log(err);
          });
      };

      return (
        <div>
          <Modal
            id="modal"
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title style={{ color: "black" }}>
                Edit Languages
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <div className="p-3">
                  <Col lg="12">
                    <fieldset>
                      <label
                        className="text-lg"
                        style={{
                          width: "100%",
                        }}
                      >
                        Language Type
                      </label>
                      <Form.Select
                        aria-label="Default select example"
                        onClick={(e) =>
                          (editIsLangugeData1.languageType = e.target.value)
                        }
                      >
                        <option
                          value="English"
                          selected={
                            props?.props?.languageType === "English"
                              ? true
                              : false
                          }
                        >
                          English
                        </option>
                        <option
                          value="Arabic"
                          selected={
                            props?.props?.languageType === "Arabic"
                              ? true
                              : false
                          }
                        >
                          Arabic
                        </option>
                        <option
                          value="Spanish"
                          selected={
                            props?.props?.languageType === "Spanish"
                              ? true
                              : false
                          }
                        >
                          Spanish
                        </option>
                        <option
                          value="Hindi"
                          selected={
                            props?.props?.languageType === "Hindi"
                              ? true
                              : false
                          }
                        >
                          Hindi
                        </option>
                        <option
                          value="Cantonese"
                          selected={
                            props?.props?.languageType === "Cantonese"
                              ? true
                              : false
                          }
                        >
                          Cantonese
                        </option>
                        <option
                          value="French"
                          selected={
                            props?.props?.languageType === "French"
                              ? true
                              : false
                          }
                        >
                          French
                        </option>
                        <option
                          value="German"
                          selected={
                            props?.props?.languageType === "German"
                              ? true
                              : false
                          }
                        >
                          German
                        </option>
                        <option
                          value="Italian"
                          selected={
                            props?.props?.languageType === "Italian"
                              ? true
                              : false
                          }
                        >
                          Italian
                        </option>
                        <option
                          value="Japanese"
                          selected={
                            props?.props?.languageType === "Japanese"
                              ? true
                              : false
                          }
                        >
                          Japanese
                        </option>
                        <option
                          value="Korean"
                          selected={
                            props?.props?.languageType === "Korean"
                              ? true
                              : false
                          }
                        >
                          Korean
                        </option>
                        <option
                          value="Mandarin"
                          selected={
                            props?.props?.languageType === "Mandarin"
                              ? true
                              : false
                          }
                        >
                          Mandarin
                        </option>
                        <option
                          value="Bengali"
                          selected={
                            props?.props?.languageType === "Bengali"
                              ? true
                              : false
                          }
                        >
                          Bengali
                        </option>
                        <option
                          value="Burmese"
                          selected={
                            props?.props?.languageType === "Burmese"
                              ? true
                              : false
                          }
                        >
                          Burmese
                        </option>
                        <option
                          value="Czech"
                          selected={
                            props?.props?.languageType === "Czech"
                              ? true
                              : false
                          }
                        >
                          Czech
                        </option>
                        <option
                          value="Dutch"
                          selected={
                            props?.props?.languageType === "Dutch"
                              ? true
                              : false
                          }
                        >
                          Dutch
                        </option>
                        <option
                          value="Greek"
                          selected={
                            props?.props?.languageType === "Greek"
                              ? true
                              : false
                          }
                        >
                          Greek
                        </option>
                        <option
                          value="Hakka"
                          selected={
                            props?.props?.languageType === "Hakka"
                              ? true
                              : false
                          }
                        >
                          Hakka
                        </option>
                        <option
                          value="Hungarian"
                          selected={
                            props?.props?.languageType === "Hungarian"
                              ? true
                              : false
                          }
                        >
                          Hungarian
                        </option>
                        <option
                          value="Hunnanese"
                          selected={
                            props?.props?.languageType === "Hunnanese"
                              ? true
                              : false
                          }
                        >
                          Hunnanese
                        </option>
                        <option
                          value="Malay/Indonesian"
                          selected={
                            props?.props?.languageType === "Malay/Indonesian"
                              ? true
                              : false
                          }
                        >
                          Malay/Indonesian
                        </option>
                        <option
                          value="Nepali"
                          selected={
                            props?.props?.languageType === "Nepali"
                              ? true
                              : false
                          }
                        >
                          Nepali
                        </option>
                        <option
                          value="Portuguese"
                          selected={
                            props?.props?.languageType === "Portuguese"
                              ? true
                              : false
                          }
                        >
                          Portuguese
                        </option>
                        <option
                          value="Russian"
                          selected={
                            props?.props?.languageType === "Russian"
                              ? true
                              : false
                          }
                        >
                          Russian
                        </option>
                        <option
                          value="Shanghainese"
                          selected={
                            props?.props?.languageType === "Shanghainese"
                              ? true
                              : false
                          }
                        >
                          Shanghainese
                        </option>
                        <option
                          value="Swedish"
                          selected={
                            props?.props?.languageType === "Swedish"
                              ? true
                              : false
                          }
                        >
                          Swedish
                        </option>
                        <option
                          value="Tagalog"
                          selected={
                            props?.props?.languageType === "Tagalog"
                              ? true
                              : false
                          }
                        >
                          Tagalog
                        </option>
                        <option
                          value="Telugu"
                          selected={
                            props?.props?.languageType === "Telugu"
                              ? true
                              : false
                          }
                        >
                          Telugu
                        </option>
                        <option
                          value="Thai"
                          selected={
                            props?.props?.languageType === "Thai" ? true : false
                          }
                        >
                          Thai
                        </option>
                        <option
                          value="Turkish"
                          selected={
                            props?.props?.languageType === "Turkish"
                              ? true
                              : false
                          }
                        >
                          Turkish
                        </option>
                        <option
                          value="Vietnamese"
                          selected={
                            props?.props?.languageType === "Vietnamese"
                              ? true
                              : false
                          }
                        >
                          Vietnamese
                        </option>
                        <option
                          value="Others"
                          selected={
                            props?.props?.languageType === "Others"
                              ? true
                              : false
                          }
                        >
                          Others
                        </option>
                      </Form.Select>
                    </fieldset>
                  </Col>
                  <Col lg="12">
                    <fieldset>
                      <label
                        className="text-lg"
                        style={{
                          width: "100%",
                        }}
                      >
                        Exam Level
                      </label>
                      <input
                        style={{
                          width: "100%",
                        }}
                        className="form-control"
                        name="lname"
                        type={"text"}
                        //   value={user.number}
                        //   onChange={getUserData}
                        onClick={(e) =>
                          (editIsLangugeData1.examLevel = e.target.value)
                        }
                        placeholder={props?.props?.examLevel}
                      />
                    </fieldset>
                  </Col>
                  <Col lg="12">
                    <fieldset>
                      <label
                        className="text-lg"
                        style={{
                          width: "100%",
                        }}
                      >
                        Grading Level
                      </label>
                      <input
                        style={{
                          width: "100%",
                        }}
                        className="form-control"
                        name="lname"
                        type={"text"}
                        placeholder={props?.props?.gradingLevel}
                        onClick={(e) =>
                          (editIsLangugeData1.gradingLevel = e.target.value)
                        }
                        //   value={user.number}
                        //   onChange={getUserData}
                      />
                    </fieldset>
                  </Col>
                </div>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button
                style={{ background: "none", color: "#C1C1C1" }}
                onClick={props.onHide}
              >
                Cancel
              </Button>

              <Button
                style={{ background: "none", color: "#39BEC1" }}
                // onClick={props.post}
                onClick={() => updateProfileExp()}
              >
                Send
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    },
    [isLanguageData]
  );

  const modalshow7 = (event) => {
    // alert('error')
    // console.log(event, "funtion event");
    if (event.clicked == true) {
      event.clicked = false;
      setModalShowLanguage(false);
    } else {
      setModalShowLanguage(true);
      event.clicked = true;
    }
  };

  const btnLanguageEdit = (event) => {
    modalshow7(event);
    setIsEditLanguageData(event);
    setIsEditLanguageData(event.id);
  };

  // delete
  function MyVerticallyCenteredModalLanguageDelete(props) {
    // console.log(props, "proooooooooops");
    return (
      <div>
        <Modal
          id="modal"
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "black" }}>
              Delete Language
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <div className="p-3">jhggff</div>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button
              style={{ background: "none", color: "#C1C1C1" }}
              onClick={props.onHide}
            >
              Cancel
            </Button>

            <Button
              style={{ background: "none", color: "#39BEC1" }}
              onClick={props.post}
            >
              Send
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  const modalshow8 = (event) => {
    // console.log(event, "funtion event");
    if (event.clicked == true) {
      event.clicked = false;
      setModalShowLanguageDelete(false);
    } else {
      setModalShowLanguageDelete(true);
      event.clicked = true;
    }
  };

  const btnLanguageDelete = (event) => {
    modalshow8(event);
    // setEditIsExperienceData(event);
  };

  // Language edit & delete End
  return (
    <Container fluid style={{ background: "#F7F7F7" }}>
      <Container>
        <Row className="align-items-center">
          <Col lg="12">
            <div
              style={{
                // display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              className="des-flex"
            >
              <h2 className="text-3xl robot">Profile</h2>
            </div>
          </Col>
        </Row>
      </Container>
      <hr className="my-2" />
      <Container>
        <Row className="align-item-center">
          <Col lg="12">
            <div className="m-3">
              <div className="boxshad py-5">
                <Row className="align-items-center">
                  <Col lg="2" className="webkit">
                    <button>
                      <FileUploadComponent />
                    </button>
                  </Col>
                  <Col lg="4">
                    <h2 className="text-3xl py-3 robot">
                      {profileData?.data?.firstName +
                        " " +
                        profileData?.data?.lastName}
                      <br />
                      <span className="text-xl" style={{ color: "#6A489C" }}>
                        Web Developer
                      </span>
                    </h2>
                    <a href={`${isCv}`} target="_blank" rel="noreferrer">
                      <Button
                        // variant="primary"
                        // onClick={() => setModalShow(true)}
                        // onClick={() =>
                        //   (window.location.href = `http://103.1.179.231:3000/${isCv}`)
                        // }

                        className="text-white border-rounded px-3"
                        style={{ background: "#39BEC1", border: "none" }}
                      >
                        <div
                          className="inline-flex"
                          style={{ fontSize: "18px" }}
                        >
                          <BsReceiptCutoff />
                          &nbsp; VIEW CV
                        </div>
                      </Button>
                    </a>
                  </Col>
                  <Col lg="3">
                    <div className="text-left">
                      <ul style={{ color: "#6A489C", fontSize: "16px" }}>
                        <li>
                          <FontAwesomeIcon
                            icon={faHome}
                            style={{
                              color: "#39BEC1",

                              fontWeight: "bolder",
                            }}
                          />
                          {profileData?.data?.role || "Freelancer"}
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faLocationDot}
                            style={{
                              color: "#39BEC1",
                              fontWeight: "bolder",
                            }}
                          />
                          {profileData?.data?.city && profileData?.data?.country
                            ? profileData?.data?.city +
                              "," +
                              profileData?.data?.country
                            : "Nugegada, Srilanka"}
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="webkit" style={{ display: "grid" }}>
                      <h2 className="text-l font-semibold">Open to Work :</h2>
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        defaultChecked={profileData?.data?.isOpenToWork}
                      />
                      <h2 className="text-2xl font-semibold pt-2">
                        Salary Range
                      </h2>

                      {/* <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      /> */}

                      <h2 style={{ color: "#7A7979" }} className="text-xl">
                        HKD ${profileData?.data?.salaryRange?.gte} - $
                        {profileData?.data?.salaryRange?.lte}
                      </h2>
                    </div>
                  </Col>
                </Row>
                {/* <hr className="my-2" />
              <Row className="align-items-center pl-4">
                <Col lg="3">
                  <div className="p3 py-3">
                    <h2 className="text-2xl">Experience</h2>
                    <br />
                    <h2 className="text-xl" style={{ color: "#7A7979" }}>
                      4
                    </h2>
                  </div>
                </Col>
                <Col lg="3">
                  <div className="p3 py-3">
                    <h2 className="text-2xl">Salary Range</h2>
                    <br />
                    <h2 className="text-xl" style={{ color: "#7A7979" }}>
                      $15000 - $20,000
                    </h2>
                  </div>
                </Col>
                <Col lg="3">
                  <div className="p3 py-3">
                    <h2 className="text-2xl">Location</h2>
                    <br />
                    <h2 className="text-xl" style={{ color: "#7A7979" }}>
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        style={{
                          fontWeight: "bolder",
                        }}
                      />{" "}
                      Panam
                    </h2>
                  </div>
                </Col>
                <Col lg="3">
                  <Button
                    className="text-white border-rounded px-3"
                    style={{ background: "#39BEC1", border: "none" }}
                  >
                    View Profile
                  </Button>  
                </Col>
              </Row> */}
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="m-3">
              <div className="boxshad">
                <h2 style={{ float: "right" }}>
                  <Button
                    onClick={handleShow}
                    className="text-white border-rounded px-3"
                    style={{
                      background: "none",
                      border: "none",
                    }}
                  >
                    <BiEdit style={{ color: "#39BEC1", fontSize: "30px" }} />
                  </Button>
                  <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title style={{ color: "black" }}>
                        Profile
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Row>
                        <div className="p-3">
                          <Row>
                            <Col lg="6">
                              <fieldset>
                                <label
                                  className="text-lg"
                                  style={{ width: "100%" }}
                                >
                                  First Name
                                </label>
                                <input
                                  style={{ width: "100%" }}
                                  className="form-control"
                                  name="fname"
                                  type={"text"}
                                  placeholder={
                                    profileData?.data?.firstName || ""
                                  }
                                  onChange={(e) =>
                                    setProfileData({
                                      ...profileData,
                                      firstName: e.target.value,
                                    })
                                  }
                                  //   value={user.number}
                                  //   onChange={getUserData}
                                />
                              </fieldset>
                            </Col>
                            <Col lg="6">
                              <fieldset>
                                <label
                                  className="text-lg"
                                  style={{ width: "100%" }}
                                >
                                  Last Name
                                </label>
                                <input
                                  style={{ width: "100%" }}
                                  className="form-control"
                                  name="fname"
                                  type={"text"}
                                  placeholder={
                                    profileData?.data?.lastName || ""
                                  }
                                  onChange={(e) =>
                                    setProfileData({
                                      ...profileData,
                                      lastName: e.target.value,
                                    })
                                  }
                                  //   value={user.number}
                                  //   onChange={getUserData}
                                />
                              </fieldset>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg="6">
                              <fieldset>
                                <label
                                  className="text-lg"
                                  style={{ width: "100%" }}
                                >
                                  Identity Card
                                </label>
                                <input
                                  style={{ width: "100%" }}
                                  className="form-control"
                                  name="fname"
                                  type={"Number"}
                                  placeholder={profileData?.data?.idCard || ""}
                                  onChange={(e) =>
                                    setProfileData({
                                      ...profileData,
                                      idCard: e.target.value,
                                    })
                                  }
                                  //   value={user.number}
                                  //   onChange={getUserData}
                                />
                              </fieldset>
                            </Col>
                            <Col lg="6">
                              <fieldset>
                                <label
                                  className="text-lg"
                                  style={{ width: "100%" }}
                                >
                                  Visa/HK Permit
                                </label>
                                <Form.Select
                                  aria-label="Default select example"
                                  value={profileData?.data?.visaPermit || ""}
                                  onChange={(e) =>
                                    setProfileData({
                                      ...profileData,
                                      visaPermit: e.target.value,
                                    })
                                  }
                                >
                                  <option>Choose...</option>
                                  <option>Yes</option>
                                  <option>No</option>
                                </Form.Select>
                              </fieldset>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg="12">
                              <FormGroup style={{ float: "left" }}>
                                <Stack
                                  direction="row"
                                  spacing={1}
                                  alignItems="center"
                                >
                                  <Typography
                                    style={{
                                      color: "#000000",
                                      fontSize: "14px",
                                    }}
                                  >
                                    <b>Make Identity Public</b>
                                  </Typography>
                                  <AntSwitch
                                    checked={checked}
                                    onClick={(event) =>
                                      HandleVisaPermitChange(event)
                                    }
                                    defaultChecked={isIdPublic}
                                    inputProps={{ "aria-label": "ant design" }}
                                  />
                                </Stack>
                              </FormGroup>
                            </Col>
                          </Row>
                          <Col lg="12">
                            <fieldset>
                              <label
                                className="text-lg"
                                style={{ width: "100%" }}
                              >
                                Gender
                              </label>
                              <Form.Select
                                aria-label="Default select example"
                                value={profileData?.data?.gender || ""}
                                onChange={(e) =>
                                  setProfileData({
                                    ...profileData,
                                    gender: e.target.value,
                                  })
                                }
                              >
                                <option hidden="">Choose...</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                              </Form.Select>
                            </fieldset>
                          </Col>
                          <Col lg="12">
                            <fieldset>
                              <label
                                className="text-lg"
                                style={{ width: "100%" }}
                              >
                                About Me
                              </label>
                              <textarea
                                placeholder={profileData?.data?.aboutMe || ""}
                                onChange={(e) =>
                                  setProfileData({
                                    ...profileData,
                                    aboutMe: e.target.value,
                                  })
                                }
                                className="form-control"
                              />
                            </fieldset>
                          </Col>
                          <Row>
                            <Col lg="6">
                              <fieldset>
                                <label
                                  className="text-lg"
                                  style={{ width: "100%" }}
                                >
                                  Phone Number
                                </label>
                                <input
                                  style={{ width: "100%" }}
                                  className="form-control"
                                  name="phone"
                                  type={"text"}
                                  placeholder={
                                    profileData?.data?.phoneNumber || ""
                                  }
                                  onChange={(e) =>
                                    setProfileData({
                                      ...profileData,
                                      phoneNumber: e.target.value,
                                    })
                                  }
                                  //   value={user.number}
                                  //   onChange={getUserData}
                                />
                              </fieldset>
                            </Col>
                            <Col lg="6">
                              <fieldset>
                                <label
                                  className="text-lg"
                                  style={{ width: "100%" }}
                                >
                                  Date of Birth
                                </label>
                                <input
                                  style={{ width: "100%" }}
                                  className="form-control"
                                  name="email"
                                  type={"date"}
                                  value={profileData?.data?.dob || ""}
                                  onChange={(e) =>
                                    setProfileData({
                                      ...profileData,
                                      dob: e.target.value,
                                    })
                                  }
                                  //   value={user.number}
                                  //   onChange={getUserData}
                                />
                              </fieldset>
                            </Col>
                            <Col lg="6">
                              <fieldset>
                                <label
                                  className="text-lg"
                                  style={{ width: "100%" }}
                                >
                                  Country (Time Zone)
                                </label>

                                <input
                                  style={{ width: "100%" }}
                                  className="form-control"
                                  type={"text"}
                                  name="firstname"
                                  placeholder={profileData?.data?.country || ""}
                                  onChange={(e) =>
                                    setProfileData({
                                      ...profileData,
                                      country: e.target.value,
                                    })
                                  }
                                  //   value={user.name}
                                  //   onChange={getUserData}
                                  required
                                />
                              </fieldset>
                            </Col>
                            <Col lg="6">
                              <fieldset>
                                <label
                                  className="text-lg"
                                  style={{ width: "100%" }}
                                >
                                  City
                                </label>

                                <input
                                  style={{ width: "100%" }}
                                  className="form-control"
                                  type={"text"}
                                  name="lastname"
                                  //   value={user.email}
                                  //   onChange={getUserData}
                                  placeholder={profileData?.data?.city || ""}
                                  onChange={(e) =>
                                    setProfileData({
                                      ...profileData,
                                      city: e.target.value,
                                    })
                                  }
                                  required
                                />
                              </fieldset>
                            </Col>
                            <Col lg="6">
                              <fieldset>
                                <label
                                  className="text-lg"
                                  style={{ width: "100%" }}
                                >
                                  Address
                                </label>
                                <input
                                  style={{ width: "100%" }}
                                  className="form-control"
                                  name="Email"
                                  type={"text"}
                                  placeholder={profileData?.data?.address || ""}
                                  onChange={(e) =>
                                    setProfileData({
                                      ...profileData,
                                      address: e.target.value,
                                    })
                                  }
                                  //   value={user.number}
                                  //   onChange={getUserData}
                                />
                              </fieldset>
                            </Col>
                            <Col lg="6">
                              <fieldset>
                                <label
                                  className="text-lg"
                                  style={{ width: "100%" }}
                                >
                                  State
                                </label>
                                <div style={{ display: "flex" }}>
                                  <input
                                    style={{ width: "100%" }}
                                    className="form-control"
                                    name="minwork"
                                    type={"text"}
                                    placeholder={profileData?.data?.state || ""}
                                    onChange={(e) =>
                                      setProfileData({
                                        ...profileData,
                                        state: e.target.value,
                                      })
                                    }
                                    //   value={user.number}
                                    //   onChange={getUserData}
                                  />
                                </div>
                              </fieldset>
                            </Col>
                          </Row>

                          <Col lg="12">
                            <fieldset>
                              <label
                                className="text-lg"
                                style={{ width: "100%" }}
                              >
                                Salary Range
                              </label>
                              <Form.Select
                                aria-label="Default select example"
                                value={profileData?.salaryRange || ""}
                                // onChange={(e) =>
                                //   setIsSalaryRange({...isSalaryRange, })
                                // }
                              >
                                <option hidden="">Choose...</option>
                                <option>per month basis</option>
                                <option>per project basis</option>
                                <option>negotiable</option>
                                <option>others</option>
                              </Form.Select>

                              {/* <input
                style={{ width: "100%" }}
                className="form-control"
                type={"text"}
                name="firstname"
                //   value={user.name}
                //   onChange={getUserData}
                placeholder="Select Job Industry
                "
                required
              /> */}
                            </fieldset>
                          </Col>
                          <Container>
                            <Row>
                              <Col lg="6">
                                <label
                                  className="text-lg"
                                  style={{ color: "#7A7979" }}
                                >
                                  Min :
                                </label>
                                <input
                                  placeholder={
                                    profileData?.data?.salaryRange.lte || ""
                                  }
                                  onChange={(e) =>
                                    setIsSalaryRange({
                                      ...isSalaryRange,
                                      lte: e.target.value,
                                    })
                                  }
                                  style={{ width: "100%" }}
                                  className="form-control"
                                  type={"number"}
                                  name="firstname"
                                  //   value={user.name}
                                  //   onChange={getUserData}
                                  required
                                />
                              </Col>
                              <Col lg="6">
                                <label
                                  className="text-lg"
                                  style={{ color: "#7A7979" }}
                                >
                                  Max :
                                </label>
                                <input
                                  placeholder={
                                    profileData?.data?.salaryRange.gte || ""
                                  }
                                  onChange={(e) =>
                                    setIsSalaryRange({
                                      ...isSalaryRange,
                                      gte: e.target.value,
                                    })
                                  }
                                  style={{ width: "100%" }}
                                  className="form-control"
                                  type={"number"}
                                  name="firstname"
                                  //   value={user.name}
                                  //   onChange={getUserData
                                  required
                                />
                              </Col>
                            </Row>
                          </Container>
                          <Col lg="6">
                            <fieldset>
                              <label
                                className="text-lg"
                                style={{ width: "100%" }}
                              >
                                Upload CV
                              </label>
                              <input
                                type="file"
                                className="form-control"
                                id="customFile"
                                onChange={(e) => {
                                  setProfileData({
                                    ...profileData,
                                    cv: e.target.files[0],
                                  });
                                }}
                              />
                              {/* <input
                                      style={{ width: "100%" }}
                                      className="form-control"
                                      name="Email"
                                      type={"text"}
                                      //   value={user.number}
                                      //   onChange={getUserData}
                                      placeholder="Huston
                "
                                    /> */}
                            </fieldset>
                          </Col>
                        </div>
                      </Row>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant="secondary"
                        onClick={handleClose}
                        style={{ background: "none", color: "#C1C1C1" }}
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={profileFunc}
                        variant="primary"
                        style={{ background: "none", color: "#39BEC1" }}
                      >
                        Save
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </h2>
                <h2 className="text-3xl" style={{ color: "#39BEC1" }}>
                  Profile
                </h2>

                <hr className="mt-2" />
                <Container>
                  <Row className="align-items-center row">
                    <Col>
                      <div className="p3">
                        <h2 className="text-xl font-semibold">Full Name</h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          {profileData?.data?.firstName +
                            " " +
                            profileData?.data?.lastName}
                        </h2>
                      </div>
                    </Col>
                    <Col>
                      <div className="p3">
                        <h2 className="text-xl font-semibold">
                          Visa / HK Permit
                        </h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          {profileData?.data?.visaPermit}
                        </h2>
                      </div>
                    </Col>
                    <Col>
                      <div className="p3">
                        <h2 className="text-xl font-semibold">Phone</h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          {profileData?.data?.phoneNumber}
                        </h2>
                      </div>
                    </Col>
                    <Col>
                      <div className="p3">
                        <h2 className="text-xl font-semibold">Date of Birth</h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          {profileData?.data?.dob}
                        </h2>
                      </div>
                    </Col>
                  </Row>
                  <Row className="align-items-center row pt-4">
                    <Col>
                      <div className="p3">
                        <h2 className="text-xl font-semibold">Gender</h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          {profileData?.data?.gender}
                        </h2>
                      </div>
                    </Col>
                    <Col>
                      <div className="p3">
                        <h2 className="text-xl font-semibold">Country</h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          {profileData?.data?.country}
                        </h2>
                      </div>
                    </Col>
                    <Col>
                      <div className="p3">
                        <h2 className="text-xl font-semibold">City</h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          {profileData?.data?.city}
                        </h2>
                      </div>
                    </Col>
                    <Col>
                      <div className="p3">
                        <h2 className="text-xl font-semibold">Address</h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          {profileData?.data?.address}
                        </h2>
                      </div>
                    </Col>
                    <Col>
                      <div className="p3">
                        <h2 className="text-xl font-semibold">State</h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          {profileData?.data?.state}
                        </h2>
                      </div>
                    </Col>
                  </Row>
                </Container>
                <Container>
                  <Row className="align-items-center">
                    <Col lg="12">
                      <div className="p3">
                        <h2 className="text-xl font-semibold">About Me</h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          {profileData?.data?.aboutMe ||
                            `It has survived t is a long established fact that a
                          reader will be distracted by the readable content of a
                          page when looking at its layout. The point of using
                          Lorem Ipsum is that it has a more-or-less normal
                          distribution of letters, as opposed to using 'Content
                          here, content here', making it look like readable
                          English. It has survived t is a long established fact
                          that a reader will be distracted by the readable
                          content of a page when looking at its layout. The
                          point of using Lorem Ipsum is that it has a
                          more-or-less normal distribution of letters, as
                          opposed to using 'Content here, content here', making
                          it look like readable English.`}
                        </h2>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="m-3">
              <div className="boxshad">
                <h2 style={{ float: "right" }}>
                  <Button
                    onClick={handleShow1}
                    className="text-white border-rounded px-3"
                    style={{
                      background: "none",
                      border: "none",
                    }}
                  >
                    <AiOutlinePlusCircle
                      style={{ color: "#39BEC1", fontSize: "30px" }}
                    />
                  </Button>
                  <Modal
                    show={show1}
                    onHide={handleClose1}
                    backdrop="static"
                    keyboard={false}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title style={{ color: "black" }}>
                        Experience
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Row>
                        <div className="p-3">
                          <Col lg="12">
                            <fieldset>
                              <label
                                className="text-lg"
                                style={{ width: "100%" }}
                              >
                                Profession
                              </label>
                              <input
                                style={{ width: "100%" }}
                                className="form-control"
                                name="fname"
                                type={"text"}
                                onChange={(e) =>
                                  setProfileExp({
                                    ...profileExp,
                                    profession: e.target.value,
                                  })
                                }
                                //   value={user.number}
                                //   onChange={getUserData}
                                placeholder="Gia"
                              />
                            </fieldset>
                          </Col>
                          <Col lg="12">
                            <fieldset>
                              <label
                                className="text-lg"
                                style={{ width: "100%" }}
                              >
                                Company Name
                              </label>
                              <input
                                style={{ width: "100%" }}
                                className="form-control"
                                name="lname"
                                value={profileExp?.companyName}
                                onChange={(e) =>
                                  setProfileExp({
                                    ...profileExp,
                                    companyName: e.target.value,
                                  })
                                }
                                //   value={user.number}
                                //   onChange={getUserData}
                                placeholder="Jay 
                "
                              />
                            </fieldset>
                          </Col>
                          <Col lg="12">
                            <fieldset>
                              <label
                                className="text-lg"
                                style={{ width: "100%" }}
                              >
                                Job Industry
                              </label>
                              <Form.Select
                                aria-label="Default select example"
                                value={profileExp?.jobIndustry || "Jay"}
                                onChange={(e) =>
                                  setProfileExp({
                                    ...profileExp,
                                    jobIndustry: e.target.value,
                                  })
                                }
                              >
                                <option hidden="">Job Industry</option>
                                <option>Universities / Education</option>
                                <option>Manufacturing</option>
                                <option>Security</option>
                                <option>Real Estate</option>
                                <option>
                                  Professional Consultings (Legal, HR, Finance
                                  etc.)
                                </option>
                                <option>Banking and Finance</option>
                                <option>
                                  Beauty Care and Health / Welness / Fitness
                                </option>
                                <option>Government / Public Utilities</option>
                                <option>
                                  Hospitality / Travel / Airlines / Clubhouse
                                </option>
                                <option>
                                  IT / R&amp;D / Cyber Security /
                                  Telecommunication / Science
                                </option>
                                <option>Retail</option>
                                <option>Insurance</option>
                                <option>
                                  Logistics / Transportaton / Supply Chain
                                </option>
                                <option>F&amp;B / Wine &amp; Spriits</option>
                                <option>
                                  Logistics / Transportaton / Supply Chain
                                </option>
                                <option>Medical / Pharmacy / Hospital</option>
                                <option>Engineerings</option>
                                <option>Others</option>
                              </Form.Select>
                            </fieldset>
                          </Col>
                          <Col lg="12">
                            <fieldset>
                              <label
                                className="text-lg"
                                style={{ width: "100%" }}
                              >
                                Job Function
                              </label>
                              <Form.Select
                                aria-label="Default select example"
                                value={profileExp?.jobFunction || "Jay"}
                                onChange={(e) =>
                                  setProfileExp({
                                    ...profileExp,
                                    jobFunction: e.target.value,
                                  })
                                }
                              >
                                <option hidden="">Job Function</option>
                                <option>HR &amp; Admin</option>
                                <option>General Management</option>
                                <option>Finance and Accounting</option>
                                <option>Sales and Marketing</option>
                                <option>
                                  Banking and Financial Institue Professionals
                                </option>
                                <option>
                                  Insurance Professionals (back-end functions)
                                </option>
                                <option>
                                  IT Professionals (Specific Fields)
                                </option>
                                <option>Manufacturing</option>
                                <option>
                                  Real Estate (Surveyers / reasearchers etc.)
                                </option>
                                <option>Finance and Accounting</option>
                                <option>Professional Designers</option>
                                <option>Lecturers / Teachers</option>
                                <option>Engineering / Architect</option>
                                <option>Others</option>
                              </Form.Select>
                            </fieldset>
                          </Col>
                          <Row>
                            <Col lg="12" className="pt-3">
                              <span
                                style={{
                                  display: "inline-flex",
                                  color: "#7A7979",
                                }}
                              >
                                <FormCheck
                                  id="check"
                                  color="blue"
                                  onChange={checkBoxHandleChange}
                                />
                                &#160;&#160;I am currently working in this role
                              </span>
                            </Col>
                            <Col lg="6">
                              <fieldset>
                                <label
                                  className="text-lg"
                                  style={{ width: "100%" }}
                                >
                                  Start Date
                                </label>
                                <input
                                  style={{ width: "100%" }}
                                  className="form-control"
                                  name="email"
                                  type={"date"}
                                  value={profileExp?.startDate || "startDate"}
                                  onChange={(e) =>
                                    setProfileExp({
                                      ...profileExp,
                                      startDate: e.target.value,
                                    })
                                  }
                                  //   value={user.number}
                                  //   onChange={getUserData}
                                  placeholder="A Service Like No Other
                "
                                />
                              </fieldset>
                            </Col>
                            <Col lg="6">
                              <fieldset>
                                <label
                                  className="text-lg"
                                  style={{ width: "100%" }}
                                >
                                  End Date
                                </label>

                                <input
                                  style={{ width: "100%" }}
                                  className="form-control"
                                  type={"date"}
                                  name="firstname"
                                  value={profileExp?.endDate || "startDate"}
                                  onChange={(e) =>
                                    setProfileExp({
                                      ...profileExp,
                                      endDate: e.target.value,
                                    })
                                  }
                                  //   value={user.name}
                                  //   onChange={getUserData}
                                  placeholder="Gia (PVT) LTD
                "
                                  required
                                />
                              </fieldset>
                            </Col>
                            <Col lg="12">
                              <fieldset>
                                <label
                                  className="text-lg"
                                  style={{ width: "100%" }}
                                >
                                  Description
                                </label>

                                <textarea
                                  placeholder="Description"
                                  className="form-control"
                                  value={profileExp?.description}
                                  onChange={(e) =>
                                    setProfileExp({
                                      ...profileExp,
                                      description: e.target.value,
                                    })
                                  }
                                />
                              </fieldset>
                            </Col>
                          </Row>
                        </div>
                      </Row>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant="secondary"
                        onClick={handleClose1}
                        style={{ background: "none", color: "#C1C1C1" }}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="primary"
                        style={{ background: "none", color: "#39BEC1" }}
                        onClick={() => ProfileExp()}
                      >
                        Save
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </h2>
                <h2 className="text-3xl" style={{ color: "#39BEC1" }}>
                  Experience
                </h2>

                <hr className="mt-2" />
                <Container>
                  <Row className="align-items-center row">
                    <Col>
                      <Row>
                        {isExperienceData.length > 0 &&
                          isExperienceData.map((event, index) => {
                            console.log(event, "event");
                            return (
                              <>
                                <Col
                                  lg="8"
                                  style={{ display: "flex" }}
                                  key={index}
                                >
                                  <div className="MuiTimelineSeparator-root css-11tgw8h">
                                    <span className="MuiTimelineDot-root MuiTimelineDot-filled MuiTimelineDot-filledGrey timeline-dot css-a7d0u7"></span>
                                    <span className="MuiTimelineConnector-root css-idv8vo"></span>
                                  </div>
                                  <div className="MuiTypography-root MuiTypography-body1 MuiTimelineContent-root MuiTimelineContent-positionRight css-18ki27g">
                                    <div className="CV-job">
                                      <Row className="align-items-center pt-2">
                                        <Col lg="6">
                                          <div className="p3">
                                            <h2 className="text-xl font-semibold">
                                              {event?.title}
                                            </h2>

                                            <h2
                                              className="text-lg"
                                              style={{ color: "#7A7979" }}
                                            >
                                              {event?.jobIndustry}
                                            </h2>
                                          </div>
                                        </Col>
                                        <Col lg="6">
                                          <div className="p3">
                                            <h2
                                              className="text-xl"
                                              style={{ color: "#6A489C" }}
                                            >
                                              {event?.jobFunction}
                                            </h2>

                                            <h2
                                              className="text-lg"
                                              style={{ color: "#7A7979" }}
                                            >
                                              {event?.duration.gte.substring(
                                                0,
                                                10
                                              )}{" "}
                                              -
                                              {event?.isCurrent === true
                                                ? "Present"
                                                : event?.duration.lte.substring(
                                                    0,
                                                    10
                                                  )}
                                            </h2>
                                          </div>
                                        </Col>
                                      </Row>

                                      <h2
                                        className="text-lg pt-2"
                                        style={{ color: "#7A7979" }}
                                      >
                                        {event?.description}
                                      </h2>
                                    </div>
                                  </div>
                                </Col>
                                <Col lg="4">
                                  <div className="p-3 webkit">
                                    <div className="inline-flex">
                                      <div className="w-10">
                                        <button
                                          onClick={handleShow5}
                                          className="text-white border-rounded"
                                          style={{
                                            background: "none",
                                            border: "none",
                                          }}
                                        >
                                          <BiEdit
                                            onClick={() => btnEdit(event)}
                                            style={{
                                              color: "#39BEC1",
                                              fontSize: "30px",
                                            }}
                                          />
                                        </button>
                                        {event.clicked == true && (
                                          <MyVerticallyCenteredModal
                                            show={modalShow}
                                            props={event}
                                            onHide={() => modalshow(event)}
                                          />
                                        )}
                                        {/* <Modal
                                          show={show5}
                                          onHide={handleClose5}
                                          backdrop="static"
                                          keyboard={false}
                                        >
                                          <Modal.Header closeButton>
                                            <Modal.Title
                                              style={{ color: "black" }}
                                              
                                            >
                                              Edit Experience
                                            </Modal.Title>
                                          </Modal.Header>
                                          <Modal.Body>
                                            <Row>
                                              <div className="p-3">
                                                <Col lg="12">
                                                  <fieldset>
                                                    <label
                                                      className="text-lg"
                                                      style={{ width: "100%" }}
                                                    >
                                                      Profession
                                                    </label>
                                                    <input
                                                      style={{ width: "100%" }}
                                                      className="form-control"
                                                      name="fname"
                                                      type={"text"}
                                                      placeholder={
                                                        isEditExperienceData.profession
                                                      }
                                                      onChange={(e) =>
                                                        setEditIsExperienceData({
                                                          ...isEditExperienceData,
                                                          profession:
                                                            e.target.value,
                                                        })
                                                      }
                                                      //   value={user.number}
                                                      //   onChange={getUserData}
                                                    />
                                                  </fieldset>
                                                </Col>
                                                <Col lg="12">
                                                  <fieldset>
                                                    <label
                                                      className="text-lg"
                                                      style={{ width: "100%" }}
                                                    >
                                                      Company Name
                                                    </label>
                                                    <input
                                                      style={{ width: "100%" }}
                                                      className="form-control"
                                                      name="lname"
                                                      placeholder={isEditExperienceData.companyName}
                                                      onChange={(e) =>
                                                        setEditIsExperienceData({
                                                          ...isEditExperienceData,
                                                          companyName:
                                                            e.target.value,
                                                        })
                                                      }
                                                      //   onChange={getUserData}
                                                    />
                                                  </fieldset>
                                                </Col>
                                                <Col lg="12">
                                                  <fieldset>
                                                    <label
                                                      className="text-lg"
                                                      style={{ width: "100%" }}
                                                    >
                                                      Job Industry
                                                    </label>
                                                    <Form.Select
                                                      aria-label="Default select example"
                                                      placeholder={isEditExperienceData.jobIndustry}
                                                      onChange={(e) =>
                                                        setEditIsExperienceData({
                                                          ...isEditExperienceData,
                                                          jobIndustry:
                                                            e.target.value,
                                                        })
                                                      }
                                                    >
                                                      <option hidden="">
                                                        Job Industry
                                                      </option>
                                                      <option>
                                                        Universities / Education
                                                      </option>
                                                      <option>
                                                        Manufacturing
                                                      </option>
                                                      <option>Security</option>
                                                      <option>
                                                        Real Estate
                                                      </option>
                                                      <option>
                                                        Professional Consultings
                                                        (Legal, HR, Finance
                                                        etc.)
                                                      </option>
                                                      <option>
                                                        Banking and Finance
                                                      </option>
                                                      <option>
                                                        Beauty Care and Health /
                                                        Welness / Fitness
                                                      </option>
                                                      <option>
                                                        Government / Public
                                                        Utilities
                                                      </option>
                                                      <option>
                                                        Hospitality / Travel /
                                                        Airlines / Clubhouse
                                                      </option>
                                                      <option>
                                                        IT / R&amp;D / Cyber
                                                        Security /
                                                        Telecommunication /
                                                        Science
                                                      </option>
                                                      <option>Retail</option>
                                                      <option>Insurance</option>
                                                      <option>
                                                        Logistics /
                                                        Transportaton / Supply
                                                        Chain
                                                      </option>
                                                      <option>
                                                        F&amp;B / Wine &amp;
                                                        Spriits
                                                      </option>
                                                      <option>
                                                        Logistics /
                                                        Transportaton / Supply
                                                        Chain
                                                      </option>
                                                      <option>
                                                        Medical / Pharmacy /
                                                        Hospital
                                                      </option>
                                                      <option>
                                                        Engineerings
                                                      </option>
                                                      <option>Others</option>
                                                    </Form.Select>
                                                  </fieldset>
                                                </Col>
                                                <Col lg="12">
                                                  <fieldset>
                                                    <label
                                                      className="text-lg"
                                                      style={{ width: "100%" }}
                                                    >
                                                      Job Function
                                                    </label>
                                                    <Form.Select
                                                      aria-label="Default select example"
                                                      placeholder={isEditExperienceData.jobFunction}
                                                      onChange={(e) =>
                                                        setEditIsExperienceData({
                                                          ...isEditExperienceData,
                                                          jobFunction:
                                                            e.target.value,
                                                        })
                                                      }
                                                    >
                                                      <option hidden="">
                                                        Job Function
                                                      </option>
                                                      <option>
                                                        HR &amp; Admin
                                                      </option>
                                                      <option>
                                                        General Management
                                                      </option>
                                                      <option>
                                                        Finance and Accounting
                                                      </option>
                                                      <option>
                                                        Sales and Marketing
                                                      </option>
                                                      <option>
                                                        Banking and Financial
                                                        Institue Professionals
                                                      </option>
                                                      <option>
                                                        Insurance Professionals
                                                        (back-end functions)
                                                      </option>
                                                      <option>
                                                        IT Professionals
                                                        (Specific Fields)
                                                      </option>
                                                      <option>
                                                        Manufacturing
                                                      </option>
                                                      <option>
                                                        Real Estate (Surveyers /
                                                        reasearchers etc.)
                                                      </option>
                                                      <option>
                                                        Finance and Accounting
                                                      </option>
                                                      <option>
                                                        Professional Designers
                                                      </option>
                                                      <option>
                                                        Lecturers / Teachers
                                                      </option>
                                                      <option>
                                                        Engineering / Architect
                                                      </option>
                                                      <option>Others</option>
                                                    </Form.Select>
                                                  </fieldset>
                                                </Col>
                                                <Row>
                                                  <Col lg="12" className="pt-3">
                                                    <span
                                                      style={{
                                                        display: "inline-flex",
                                                        color: "#7A7979",
                                                      }}
                                                    >
                                                      <FormCheck
                                                        id="check"
                                                        color="blue"
                                                        onChange={
                                                          checkBoxHandleChange
                                                        }
                                                        checked={
                                                          event?.currentlyWorking ===
                                                          "on"
                                                            ? true
                                                            : false
                                                        }
                                                      />
                                                      &#160;&#160;I am currently
                                                      working in this role
                                                    </span>
                                                  </Col>
                                                  <Col lg="6">
                                                    <fieldset>
                                                      <label
                                                        className="text-lg"
                                                        style={{
                                                          width: "100%",
                                                        }}
                                                      >
                                                        Start Date
                                                      </label>
                                                      <input
                                                        style={{
                                                          width: "100%",
                                                        }}
                                                        value={isEditExperienceData.startDate}
                                                        className="form-control"
                                                        name="email"
                                                        type={"date"}
                                                        onChange={(e) =>
                                                          setEditIsExperienceData({
                                                            ...isEditExperienceData,
                                                            startDate:
                                                              e.target.value,
                                                          })
                                                        }
                                                        //   value={user.number}
                                                        //   onChange={getUserData}
                                                        placeholder="A Service Like No Other
                "
                                                      />
                                                    </fieldset>
                                                  </Col>
                                                  <Col lg="6">
                                                    <fieldset>
                                                      <label
                                                        className="text-lg"
                                                        style={{
                                                          width: "100%",
                                                        }}
                                                      >
                                                        End Date
                                                      </label>
                                                      <input
                                                        style={{
                                                          width: "100%",
                                                        }}
                                                        className="form-control"
                                                        type={"date"}
                                                        name="firstname"
                                                        value={isEditExperienceData.endDate}
                                                        onChange={(e) =>
                                                          setEditIsExperienceData({
                                                            ...isEditExperienceData,
                                                            endDate:
                                                              e.target.value,
                                                          })
                                                        }
                                                        //   value={user.name}
                                                        //   onChange={getUserData}
                                                        placeholder="Gia (PVT) LTD
                "
                                                        required
                                                      />
                                                    </fieldset>
                                                  </Col>
                                                  <Col lg="12">
                                                    <fieldset>
                                                      <label
                                                        className="text-lg"
                                                        style={{
                                                          width: "100%",
                                                        }}
                                                      >
                                                        Description
                                                      </label>
                                                      <textarea
                                                        // placeholder="Description"
                                                        className="form-control"
                                                        placeholder={
                                                          event?.description
                                                        }
                                                        onChange={(e) =>
                                                          setEditIsExperienceData({
                                                            ...isEditExperienceData,
                                                            description:
                                                              e.target.value,
                                                          })
                                                        }
                                                      />
                                                    </fieldset>
                                                  </Col>
                                                </Row>
                                              </div>
                                            </Row>
                                          </Modal.Body>
                                          <Modal.Footer>
                                            <Button
                                              variant="secondary"
                                              onClick={handleClose5}
                                              style={{
                                                background: "none",
                                                color: "#C1C1C1",
                                              }}
                                            >
                                              Cancel
                                            </Button>
                                            <Button
                                              onClick={() =>
                                                updateProfileExp(isEditExperienceData.id)
                                              }
                                              variant="primary"
                                              style={{
                                                background: "none",
                                                color: "#39BEC1",
                                              }}
                                            >
                                              Save
                                            </Button>
                                          </Modal.Footer>
                                        </Modal> */}
                                      </div>
                                      <div className="w-10">
                                        <button
                                          onClick={handleShow10}
                                          className="text-white border-rounded"
                                          style={{
                                            background: "none",
                                            border: "none",
                                          }}
                                        >
                                          <ImBin
                                            style={{
                                              cursor: "pointer",
                                              color: "#39BEC1",
                                              fontSize: "30px",
                                            }}
                                            data-toggle="modal"
                                            onClick={() => btnDelete(event)}
                                          />
                                        </button>
                                        {event.clicked == true && (
                                          <MyVerticallyCenteredModalDelete
                                            show={modalShowDelete}
                                            props={event}
                                            onHide={() => modalshow1(event)}
                                          />
                                        )}
                                        <div></div>
                                      </div>
                                    </div>
                                  </div>
                                </Col>
                              </>
                            );
                          })}
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="m-3">
              <div className="boxshad">
                <h2 style={{ float: "right" }}>
                  <Button
                    onClick={handleShow2}
                    className="text-white border-rounded px-3"
                    style={{
                      background: "none",
                      border: "none",
                    }}
                  >
                    <AiOutlinePlusCircle
                      style={{ color: "#39BEC1", fontSize: "30px" }}
                    />
                  </Button>
                  <Modal
                    show={show2}
                    onHide={handleClose2}
                    backdrop="static"
                    keyboard={false}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title style={{ color: "black" }}>
                        Education
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Row>
                        <div className="p-3">
                          <Col lg="12">
                            <fieldset>
                              <label
                                className="text-lg"
                                style={{ width: "100%" }}
                              >
                                Education Level
                              </label>
                              <Form.Select
                                aria-label="Default select example"
                                onChange={(e) =>
                                  setIsEducation({
                                    ...isEducation,
                                    educationLevel: e.target.value,
                                  })
                                }
                              >
                                <option hidden="">Education Level</option>
                                <option>Associate Degree</option>
                                <option>Bachelor Degree</option>
                                <option>Master Degree</option>
                                <option>Doctorate Degree</option>
                                <option>PhD</option>
                                <option>Others</option>
                              </Form.Select>
                            </fieldset>
                          </Col>
                          <Col lg="12">
                            <fieldset>
                              <label
                                className="text-lg"
                                style={{ width: "100%" }}
                              >
                                Institute
                              </label>
                              <input
                                style={{ width: "100%" }}
                                className="form-control"
                                name="institute"
                                type={"text"}
                                onChange={(e) =>
                                  setIsEducation({
                                    ...isEducation,
                                    institute: e.target.value,
                                  })
                                }
                                //   value={user.number}
                                //   onChange={getUserData}
                                placeholder="Jay "
                              />
                            </fieldset>
                          </Col>
                          <Col lg="12">
                            <fieldset>
                              <label
                                className="text-lg"
                                style={{ width: "100%" }}
                              >
                                Major
                              </label>
                              <Form.Select
                                aria-label="Default select example"
                                onChange={(e) =>
                                  setIsEducation({
                                    ...isEducation,
                                    major: e.target.value,
                                  })
                                }
                              >
                                <option hidden="">Major</option>
                                <option>Masters of Law</option>
                                <option>Computer Science</option>
                                <option>Phsycology</option>
                              </Form.Select>
                            </fieldset>
                          </Col>

                          <Row>
                            <Col lg="6">
                              <fieldset>
                                <label
                                  className="text-lg"
                                  style={{ width: "100%" }}
                                >
                                  Start Date
                                </label>
                                <input
                                  style={{ width: "100%" }}
                                  className="form-control"
                                  name="email"
                                  onChange={(e) =>
                                    setIsEducation({
                                      ...isEducation.duration,
                                      gte: e.target.value,
                                    })
                                  }
                                  type={"date"}
                                  //   value={user.number}
                                  //   onChange={getUserData}
                                  placeholder="A Service Like No Other
                "
                                />
                              </fieldset>
                            </Col>
                            <Col lg="6">
                              <fieldset>
                                <label
                                  className="text-lg"
                                  style={{ width: "100%" }}
                                >
                                  End Date
                                </label>

                                <input
                                  style={{ width: "100%" }}
                                  className="form-control"
                                  type={"date"}
                                  name="firstname"
                                  onChange={(e) =>
                                    setIsEducation({
                                      ...isEducation.duration,
                                      lte: e.target.value,
                                    })
                                  }
                                  //   value={user.name}
                                  //   onChange={getUserData}
                                  placeholder="Gia (PVT) LTD"
                                  required
                                />
                              </fieldset>
                            </Col>
                            <Col lg="6">
                              <fieldset>
                                <label
                                  className="text-lg"
                                  style={{ width: "100%" }}
                                >
                                  Upload Certification
                                </label>

                                <input
                                  type="file"
                                  onChange={(e) => {
                                    setIsEducation({
                                      ...isEducation,
                                      certificate: e.target.files[0],
                                    });
                                  }}
                                  class="form-control"
                                  id="customFile"
                                />
                              </fieldset>
                            </Col>
                          </Row>
                        </div>
                      </Row>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant="secondary"
                        onClick={handleClose2}
                        style={{ background: "none", color: "#C1C1C1" }}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="primary"
                        style={{ background: "none", color: "#39BEC1" }}
                        onClick={() => educationFunc()}
                      >
                        Save
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </h2>
                <h2 className="text-3xl" style={{ color: "#39BEC1" }}>
                  Education
                </h2>
                <hr className="mt-2" />
                {isEducationData.length > 0 &&
                  isEducationData.map((event, index) => {
                    // console.log(event, 'eveeeeeeent');
                    return (
                      <>
                        <Container key={index}>
                          <Row className="align-items-center row">
                            <Col>
                              <Row className="align-items-center">
                                <Col lg="3">
                                  <div className="p3">
                                    <h2 className="text-xl font-semibold">
                                      {event.institute}
                                    </h2>

                                    <h2
                                      className="text-lg"
                                      style={{ color: "#7A7979" }}
                                    >
                                      {event.educationLevel}
                                    </h2>
                                  </div>
                                </Col>
                                <Col lg="3">
                                  <div className="p3">
                                    <h2
                                      className="text-xl"
                                      style={{ color: "#6A489C" }}
                                    >
                                      {event.major}
                                    </h2>

                                    <h2
                                      className="text-lg"
                                      style={{ color: "#7A7979" }}
                                    >
                                      {event.duration.gte.substring(0, 10) +
                                        " - " +
                                        event.duration.lte.substring(0, 10)}
                                    </h2>
                                  </div>
                                </Col>
                                <Col lg="3">
                                  {event?.certificate ? (
                                    <div className="p-3 webkit">
                                      <Button
                                        className="text-white border-rounded px-3 py-2"
                                        style={{
                                          background: "#39BEC1",
                                          border: "none",
                                        }}
                                        onClick={() =>
                                          (window.location.href = `http://103.1.179.231:3000/${event.certificate}`)
                                        }
                                      >
                                        see certificate
                                      </Button>
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </Col>
                                <Col lg="3">
                                  <div className="p-3 webkit">
                                    <div className="inline-flex">
                                      <div className="w-10">
                                        <button
                                          onClick={handleShow6}
                                          className="text-white border-rounded"
                                          style={{
                                            background: "none",
                                            border: "none",
                                          }}
                                        >
                                          <BiEdit
                                            onClick={() =>
                                              btnEducationEdit(event)
                                            }
                                            style={{
                                              color: "#39BEC1",
                                              fontSize: "30px",
                                            }}
                                          />
                                        </button>
                                        {event.clicked == true && (
                                          <MyVerticallyCenteredModalEducation
                                            show={modalShowEducation}
                                            props={event}
                                            onHide={() => modalshow2(event)}
                                          />
                                        )}
                                      </div>
                                      <div className="w-10">
                                        <ImBin
                                          style={{
                                            cursor: "pointer",
                                            color: "#39BEC1",
                                            fontSize: "30px",
                                          }}
                                          onClick={() =>
                                            btnEducationDelete(event)
                                          }
                                        />
                                        {event.clicked == true && (
                                          <MyVerticallyCenteredModalEducationDelete
                                            show={modalShowEducationDelete}
                                            props={event}
                                            onHide={() => modalshow3(event)}
                                          />
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Container>
                      </>
                    );
                  })}
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="m-3">
              <div className="boxshad">
                <h2 style={{ float: "right" }}>
                  <Button
                    onClick={handleShow3}
                    className="text-white border-rounded px-3"
                    style={{
                      background: "none",
                      border: "none",
                    }}
                  >
                    <AiOutlinePlusCircle
                      style={{ color: "#39BEC1", fontSize: "30px" }}
                    />
                  </Button>
                  <Modal
                    show={show3}
                    onHide={handleClose3}
                    backdrop="static"
                    keyboard={false}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title style={{ color: "black" }}>
                        Achievements
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Row>
                        <div className="p-3">
                          <Col lg="12">
                            <fieldset>
                              <label
                                className="text-lg"
                                style={{ width: "100%" }}
                              >
                                Title
                              </label>
                              <input
                                style={{ width: "100%" }}
                                className="form-control"
                                name="fname"
                                type={"text"}
                                onChange={(e) =>
                                  setIsAchievement({
                                    ...isAchievement,
                                    title: e.target.value,
                                  })
                                }
                                //   value={user.number}
                                //   onChange={getUserData}
                                placeholder="Gia"
                              />
                            </fieldset>
                          </Col>
                          <Col lg="12">
                            <fieldset>
                              <label
                                className="text-lg"
                                style={{ width: "100%" }}
                              >
                                Description
                              </label>
                              <textarea
                                onChange={(e) =>
                                  setIsAchievement({
                                    ...isAchievement,
                                    description: e.target.value,
                                  })
                                }
                                placeholder="Description"
                                className="form-control"
                              />
                            </fieldset>
                          </Col>
                          <Col lg="12">
                            <fieldset>
                              <label
                                className="text-lg"
                                style={{ width: "100%" }}
                              >
                                Upload Certification
                              </label>
                              <input
                                type="file"
                                onChange={(e) => {
                                  setIsAchievement({
                                    ...isAchievement,
                                    achievement: e.target.files[0],
                                  });
                                }}
                                class="form-control"
                                id="customFile"
                              />
                            </fieldset>
                          </Col>
                        </div>
                      </Row>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant="secondary"
                        onClick={handleClose3}
                        style={{ background: "none", color: "#C1C1C1" }}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="primary"
                        style={{ background: "none", color: "#39BEC1" }}
                        onClick={() => achievementFunc()}
                      >
                        Save
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </h2>
                <h2 className="text-3xl" style={{ color: "#39BEC1" }}>
                  Achievements
                </h2>

                <hr className="mt-2" />
                <Container>
                  <Row className="align-items-center row">
                    <Col>
                      <Row className="align-items-center">
                        {isAchievementData.length > 0 &&
                          isAchievementData.map((event, index) => {
                            return (
                              <>
                                <Col lg="6" key={index}>
                                  <div className="p3">
                                    <h2 className="text-xl font-semibold">
                                      {event?.title}
                                    </h2>

                                    <p
                                      className="text-lg"
                                      style={{ color: "#7A7979" }}
                                    >
                                      {event?.description}
                                    </p>
                                  </div>
                                </Col>
                                <Col lg="3">
                                  <div className="p-3 webkit">
                                    <Button
                                      className="text-white border-rounded px-3 py-2"
                                      style={{
                                        background: "#39BEC1",
                                        border: "none",
                                      }}
                                      onClick={() =>
                                        (window.location.href = `http://localhost:3000${event.achievement}`)
                                      }
                                    >
                                      see certificate
                                    </Button>
                                  </div>
                                </Col>
                                <Col lg="3">
                                  <div className="p-3 webkit">
                                    <div className="inline-flex">
                                      <div className="w-10">
                                        <button
                                          onClick={handleShow7}
                                          className="text-white border-rounded"
                                          style={{
                                            background: "none",
                                            border: "none",
                                          }}
                                        >
                                          <BiEdit
                                            onClick={() =>
                                              btnAchieveEdit(event)
                                            }
                                            style={{
                                              color: "#39BEC1",
                                              fontSize: "30px",
                                            }}
                                          />
                                        </button>
                                        {event.clicked == true && (
                                          <MyVerticallyCenteredModalAchievement
                                            show={modalShowAchievement}
                                            props={event}
                                            onHide={() => modalshow5(event)}
                                          />
                                        )}
                                      </div>
                                      <div className="w-10">
                                        <ImBin
                                          style={{
                                            cursor: "pointer",
                                            color: "#39BEC1",
                                            fontSize: "30px",
                                          }}
                                          onClick={() =>
                                            btnAchieveDelete(event)
                                          }
                                        />
                                      </div>
                                      {event.clicked == true && (
                                        <MyVerticallyCenteredModalAchievementDelete
                                          show={modalShowAchievementDelete}
                                          props={event}
                                          onHide={() => modalshow6(event)}
                                        />
                                      )}
                                    </div>
                                  </div>
                                </Col>
                              </>
                            );
                          })}

                        {/* <hr className="my-2" /> */}
                        {/* <Col lg="6">
                          <div className="p3">
                            <h2 className="text-xl font-semibold">EXCEL</h2>
                            <p className="text-lg" style={{ color: "#7A7979" }}>
                              It has survived t is a long established fact that
                              a reader will be distracted by the readable
                              content of a page when looking at its layout. The
                              point of using Lorem Ipsum is that it has a
                              more-or-less normal distribution of letters.
                            </p>
                          </div>
                        </Col>
                        <Col lg="3">
                          <div className="p-3 webkit">
                            <Button
                              className="text-white border-rounded px-3 py-2"
                              style={{ background: "#39BEC1", border: "none" }}
                            >
                              see certificate
                            </Button>
                          </div>
                        </Col>
                        <Col lg="3">
                          <div className="p-3 webkit">
                            <div className="inline-flex">
                              <div className="w-10">
                                <BiEdit
                                  style={{
                                    color: "#39BEC1",
                                    fontSize: "30px",
                                  }}
                                />
                              </div>
                              <div className="w-10">
                                <ImBin
                                  style={{
                                    color: "#39BEC1",
                                    fontSize: "30px",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </Col> */}
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="m-3">
              <div className="boxshad">
                <h2 style={{ float: "right" }}>
                  <Button
                    onClick={handleShow4}
                    className="text-white border-rounded px-3"
                    style={{
                      background: "none",
                      border: "none",
                    }}
                  >
                    <AiOutlinePlusCircle
                      style={{ color: "#39BEC1", fontSize: "30px" }}
                    />
                  </Button>
                  <Modal
                    show={show4}
                    onHide={handleClose4}
                    backdrop="static"
                    keyboard={false}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title style={{ color: "black" }}>
                        Languages
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Row>
                        <div className="p-3">
                          <Col lg="12">
                            <fieldset>
                              <label
                                className="text-lg"
                                style={{ width: "100%" }}
                              >
                                Language Type
                              </label>
                              <Form.Select
                                aria-label="Default select example"
                                onClick={(e) =>
                                  setIsLanguage({
                                    ...isLanguage,
                                    languageType: e.target.value,
                                  })
                                }
                              >
                                <option hidden="">Language Type</option>
                                <option value="English">English</option>
                                <option value="Arabic">Arabic</option>
                                <option value="Spanish">Spanish</option>
                                <option value="Hindi">Hindi</option>
                                <option value="Cantonese">Cantonese</option>
                                <option value="French">French</option>
                                <option value="German">German</option>
                                <option value="Italian">Italian</option>
                                <option value="Japanese">Japanese</option>
                                <option value="Korean">Korean</option>
                                <option value="Mandarin">Mandarin</option>
                                <option value="Bengali">Bengali</option>
                                <option value="Burmese">Burmese</option>
                                <option value="Czech">Czech</option>
                                <option value="Dutch">Dutch</option>
                                <option value="Greek">Greek</option>
                                <option value="Hakka">Hakka</option>
                                <option value="Hungarian">Hungarian</option>
                                <option value="Hunnanese">Hunnanese</option>
                                <option value="Malay/Indonesian">
                                  Malay/Indonesian
                                </option>
                                <option value="Nepali">Nepali</option>
                                <option value="Portuguese">Portuguese</option>
                                <option value="Russian">Russian</option>
                                <option value="Shanghainese">
                                  Shanghainese
                                </option>
                                <option value="Swedish">Swedish</option>
                                <option value="Tagalog">Tagalog</option>
                                <option value="Telugu">Telugu</option>
                                <option value="Thai">Thai</option>
                                <option value="Turkish">Turkish</option>
                                <option value="Vietnamese">Vietnamese</option>
                                <option value="Others">Others</option>
                              </Form.Select>
                            </fieldset>
                          </Col>
                          <Col lg="12">
                            <fieldset>
                              <label
                                className="text-lg"
                                style={{ width: "100%" }}
                              >
                                Exam Level
                              </label>
                              <input
                                style={{ width: "100%" }}
                                className="form-control"
                                name="lname"
                                type={"text"}
                                onClick={(e) =>
                                  setIsLanguage({
                                    ...isLanguage,
                                    examLevel: e.target.value,
                                  })
                                }
                                //   value={user.number}
                                //   onChange={getUserData}
                                placeholder="Jay"
                              />
                            </fieldset>
                          </Col>
                          <Col lg="12">
                            <fieldset>
                              <label
                                className="text-lg"
                                style={{ width: "100%" }}
                              >
                                Grading Level
                              </label>
                              <input
                                style={{ width: "100%" }}
                                className="form-control"
                                name="lname"
                                type={"text"}
                                onClick={(e) =>
                                  setIsLanguage({
                                    ...isLanguage,
                                    gradingLevel: e.target.value,
                                  })
                                }
                                //   value={user.number}
                                //   onChange={getUserData}
                              />
                            </fieldset>
                          </Col>
                        </div>
                      </Row>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant="secondary"
                        onClick={handleClose4}
                        style={{ background: "none", color: "#C1C1C1" }}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="primary"
                        style={{ background: "none", color: "#39BEC1" }}
                        onClick={() => LanguageFunc()}
                      >
                        Save
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </h2>
                <h2 className="text-3xl" style={{ color: "#39BEC1" }}>
                  Languages
                </h2>

                <hr className="mt-2" />
                <Container>
                  <Row className="align-items-center row">
                    <Col>
                      <Table responsive>
                        <thead className="webkit text-lg">
                          <tr>
                            <th></th>
                            <th style={{ color: "#6A489C" }}>Exam Level</th>
                            <th style={{ color: "#6A489C" }}>Grading Level</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody className="webkit text-l">
                          {isLanguageData.length > 0 &&
                            isLanguageData.map((event, index) => {
                              return (
                                <>
                                  <tr key={index}>
                                    <td>{event?.languageType}</td>
                                    <td style={{ color: "#7A7979" }}>
                                      {event?.examLevel}
                                    </td>
                                    <td style={{ color: "#7A7979" }}>
                                      {event?.gradingLevel}
                                    </td>
                                    <td>
                                      <div className="p-3 webkit">
                                        <div className="inline-flex">
                                          <div className="w-10">
                                            <button
                                              onClick={handleShow8}
                                              className="text-white border-rounded"
                                              style={{
                                                background: "none",
                                                border: "none",
                                              }}
                                            >
                                              <BiEdit
                                                style={{
                                                  color: "#39BEC1",
                                                  fontSize: "30px",
                                                }}
                                                onClick={() =>
                                                  btnLanguageEdit(event)
                                                }
                                              />
                                            </button>
                                            {event.clicked == true && (
                                              <MyVerticallyCenteredModalLanguage
                                                show={modalShowLanguage}
                                                props={event}
                                                onHide={() => modalshow7(event)}
                                              />
                                            )}
                                          </div>
                                          <div className="w-10">
                                            <ImBin
                                              style={{
                                                cursor: "pointer",
                                                color: "#39BEC1",
                                                fontSize: "30px",
                                              }}
                                              onClick={() =>
                                                btnLanguageDelete(event)
                                              }
                                            />
                                          </div>
                                          {event.clicked == true && (
                                            <MyVerticallyCenteredModalLanguageDelete
                                              show={modalShowLanguageDelete}
                                              props={event}
                                              onHide={() => modalshow8(event)}
                                            />
                                          )}
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </>
                              );
                            })}

                          {/* <tr>
                            <td>Hindi</td>
                            <td style={{ color: "#7A7979" }}>fgfg</td>
                            <td style={{ color: "#7A7979" }}>65</td>
                            <td>
                              <div className="p-3 webkit">
                                <div className="inline-flex">
                                  <div className="w-10">
                                    <BiEdit
                                      style={{
                                        color: "#39BEC1",
                                        fontSize: "30px",
                                      }}
                                    />
                                  </div>
                                  <div className="w-10">
                                    <ImBin
                                      style={{
                                        color: "#39BEC1",
                                        fontSize: "30px",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Bengali</td>
                            <td style={{ color: "#7A7979" }}>B5</td>
                            <td style={{ color: "#7A7979" }}>30000</td>
                            <td>
                              <div className="p-3 webkit">
                                <div className="inline-flex">
                                  <div className="w-10">
                                    {" "}
                                    <BiEdit
                                      style={{
                                        color: "#39BEC1",
                                        fontSize: "30px",
                                      }}
                                    />
                                  </div>
                                  <div className="w-10">
                                    <ImBin
                                      style={{
                                        color: "#39BEC1",
                                        fontSize: "30px",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr> */}
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
