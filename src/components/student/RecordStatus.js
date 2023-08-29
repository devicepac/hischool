import React from "react";
import {
  LifeRecordTableWrap,
  RecordStatusDiv,
} from "../../styles/student/LifeRecordStyle";
import SchoolRecordChart from "./SchoolRecordChart";
import MockRecordChart from "./MockRecordChart";
import SchoolRecordTable from "./SchoolRecordTable";
import MockRecordTable from "./MockRecordTable";
import { RecordTableWrap } from "../../styles/student/SchoolRecordStyle";

const RecordStatus = () => {
  return (
    <RecordStatusDiv>
      <h4>성적 현황</h4>
      <div className="record-chart">
        <div className="school-record-wrap">
          <span>내신 그래프</span>
          <SchoolRecordChart />
        </div>
        <div className="mock-record-wrap">
          <span>모의고사 그래프</span>
          <MockRecordChart />
        </div>
      </div>
      <div className="record-table">
        <div className="school-record-wrap">
          <LifeRecordTableWrap>
            <SchoolRecordTable />
          </LifeRecordTableWrap>
        </div>
        <div className="mock-record-wrap">
          <LifeRecordTableWrap>
            <MockRecordTable />
          </LifeRecordTableWrap>
        </div>
      </div>
    </RecordStatusDiv>
  );
};

export default RecordStatus;
