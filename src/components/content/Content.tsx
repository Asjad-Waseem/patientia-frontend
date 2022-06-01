import React, { useEffect } from "react";

import "assets/css/App.css";
import "assets/css/CardConstants.css";

import { makeStyles } from "@mui/styles";

import CardContent from "@mui/material/CardContent";
import CardInfo from "components/card-info/CardInfo";

import clsx from "clsx";
import axios from 'axios';

import { LocaleEnglish, LocaleGerman } from "utils/LocaleEn";

import { Button } from "@mui/material";

import { CardComponent } from "components/cards/Card";
import { ModalComponent } from "components/modal/Modal";

import { ReactComponent as GermanLanguage } from "assets/images/Flag_of_Germany.svg";
import { ReactComponent as EnglishLanguage } from "assets/images/Flag_of_the_United_Kingdom.svg";
import Company_Logo from "assets/images/company/Company_Logo.png";

import { useAppSelector, useAppDispatch } from "redux/hooks";
import {
  darkMode,
  userInfo,
  userCallUpInfo,
  updateUserCallUpInfo,
  callMessage,
  updateCallMessage,
  language,
  updateLanguage,
} from "redux/slices/landing/landingSlice";

const useStyles = makeStyles({
  borderRadiusClass: {
    borderRadius: "10px !important",
  },
  grayBg: {
    backgroundColor: "rgba(12,12,12) !important",
    color: "#ffffff !important",
    borderRadius: "10px !important"
  },
  otherInfoBoxAlignment: {
    paddingBottom: "20px",
    marginBottom: "0px"
 },
 otherInfoCardPadding: {
   paddingBottom: "20px"
 }
});

export const Content: React.FC = () => {
  const dispatch = useAppDispatch();

  const darkModeStatus = useAppSelector(darkMode);
  const currentLanguage = useAppSelector(language);
  const userInfoData = useAppSelector(userInfo);
  const userCallUpInfoData = useAppSelector(userCallUpInfo);
  const callMessageStatus = useAppSelector(callMessage);

  const userId = userInfoData[0]?.kundenID;
  const queueName = userInfoData[0]?.warteName;
  const avgWaitingTime = userInfoData[0]?.avgWaitTime;
  const waitingSinceTime = userInfoData[0]?.timeWaiting;

  const isWaiting = userInfoData[0]?.isWaiting;

  const advisorName =  userCallUpInfoData[0]?.beraterName;
  const callUpLocation = userCallUpInfoData[0]?.placeName;
  const callUpTime = userCallUpInfoData[0]?.callupTime;

  useEffect(() => {
    if(!isWaiting || callMessageStatus) {
    const axiosData = async () => {
      const response = await axios(
        "http://maik8server.de:5000/api/Patientia/callup?kID=17&pin=B04D"
      );
      dispatch(updateUserCallUpInfo(response.data));
    };
    axiosData();
    }
  }, [dispatch]);

  const classes = useStyles();

  const infoCard = (
    <React.Fragment>
      <CardContent>
        <CardInfo
          marginBottom={2}
          infoHeading={
            currentLanguage === "English"
              ? LocaleEnglish.landing.numberHeading
              : LocaleGerman.landing.numberHeading
          }
          infoValue={userId}
        />
        <CardInfo
          marginBottom={2}
          infoHeading={
            currentLanguage === "English"
              ? LocaleEnglish.landing.queueHeading
              : LocaleGerman.landing.queueHeading
          }
          infoValue={queueName}
        />
        <CardInfo
          marginBottom={2}
          infoHeading={
            currentLanguage === "English"
              ? LocaleEnglish.landing.avgWaitingTimeHeading
              : LocaleGerman.landing.avgWaitingTimeHeading
          }
          infoValue={avgWaitingTime} 
          infoUnit={currentLanguage === "English" ? LocaleEnglish.landing.timeUnit : LocaleGerman.landing.timeUnit}
        />
        <CardInfo
          infoHeading={
            currentLanguage === "English"
              ? LocaleEnglish.landing.waitingSinceHeading
              : LocaleGerman.landing.avgWaitingTimeHeading
          }
          infoValue={waitingSinceTime}
          infoUnit={currentLanguage === "English" ? LocaleEnglish.landing.timeUnit : LocaleGerman.landing.timeUnit}
        />
      </CardContent>
    </React.Fragment>
  );

  const statusCard = (
    <React.Fragment>
      <CardContent>
        <CardInfo
          infoValueColor="#3fa0fe"
          infoHeading={
            currentLanguage === "English"
              ? LocaleEnglish.landing.statusMessage
              : LocaleGerman.landing.statusMessage
          }
          infoValue={isWaiting && (currentLanguage === "English" ? LocaleEnglish.landing.waitingStatus : LocaleEnglish.landing.waitingStatus)}
        />
      </CardContent>
    </React.Fragment>
  );

  const otherInfoCard = (
    <React.Fragment>
      <CardContent className={clsx("other__info", darkModeStatus ? "otherInfoMarginBottom" : null)}>
        <div className="common__container">
          <p className="overline__alt">
            {currentLanguage === "English"
              ? LocaleEnglish.landing.language
              : LocaleGerman.landing.language}
          </p>

          <div className="row__flex">
            <Button
              className="german__language__btn"
              onClick={() => dispatch(updateLanguage("German"))}
              title={
                currentLanguage === "English"
                  ? LocaleEnglish.landing.germanLanguage
                  : LocaleGerman.landing.germanLanguage
              }
            >
              <GermanLanguage
                height={60}
                width="100px"
                style={{ borderRadius: "10px" }}
              />
            </Button>

            <Button
              className="english__language__btn"
              onClick={() => dispatch(updateLanguage("English"))}
              title={
                currentLanguage === "English"
                  ? LocaleEnglish.landing.englishLanguage
                  : LocaleGerman.landing.englishLanguage
              }
            >
              <EnglishLanguage
                height={60}
                width="100px"
                style={{ borderRadius: "10px" }}
              />
            </Button>
          </div>
        </div>

        <div className="other__info__divider__line" />

        <div className="common__container">
          <p className="overline__alt">
            {currentLanguage === "English"
              ? LocaleEnglish.landing.about
              : LocaleGerman.landing.about}
          </p>

          <div className="about__us__container">
            <img
              className="company__logo__img"
              src={Company_Logo}
              height={60}
              width="100px"
              alt="company__logo__alt"
            />

            <div className="about__us__info">
              <p className="about__us__company">
                {currentLanguage === "English"
                  ? LocaleEnglish.landing.serviceBy
                  : LocaleGerman.landing.serviceBy}
              </p>
              <p className={clsx("white__space", "about__us__company")}>
                {currentLanguage === "English"
                  ? LocaleEnglish.landing.companyName
                  : LocaleGerman.landing.companyName}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </React.Fragment>
  );

  const modalCard = (
    <React.Fragment>
      <CardContent>
        <CardInfo
          marginBottom={2}
          infoHeading={null}
          infoValue={
            currentLanguage === "English"
              ? LocaleEnglish.landing.callMessage
              : LocaleGerman.landing.callMessage
          }
        />
        <CardInfo
          marginBottom={2}
          infoHeading={LocaleEnglish.landing.advisor}
          infoValue={advisorName}
        />
        <CardInfo
          marginBottom={2}
          infoHeading={LocaleEnglish.landing.foundHere}
          infoValue={callUpLocation}
        />
        <CardInfo
          infoHeading={LocaleEnglish.landing.timeOfCalling}
          infoValue={callUpTime}
        />
      </CardContent>
    </React.Fragment>
  );

  return (
    <>
      <ModalComponent
        card={modalCard}
        // open={!isWaiting}
        open={callMessageStatus}
        onHandleOpen={() => dispatch(updateCallMessage(true))}
        onHandleClose={() => dispatch(updateCallMessage(false))}
      />

      <CardComponent
        card={infoCard}
        optionalClassBox={darkModeStatus ? classes.grayBg : null}
        optionalClassCard={darkModeStatus ? classes.grayBg : null}
        borderRadiusClass={classes.borderRadiusClass}
      />
      <CardComponent
        card={statusCard}
        optionalClassBox={darkModeStatus ? classes.grayBg : null}
        optionalClassCard={darkModeStatus ? classes.grayBg : null}
        borderRadiusClass={classes.borderRadiusClass}
      />
      <CardComponent
        card={otherInfoCard}
        optionalClassBox={classes.otherInfoBoxAlignment}
        optionalClassCard={darkModeStatus ? clsx(classes.grayBg, classes.otherInfoCardPadding) : null}
        borderRadiusClass={classes.borderRadiusClass}
      />
    </>
  );
};

export default Content;
