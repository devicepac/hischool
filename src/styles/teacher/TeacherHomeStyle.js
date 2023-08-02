import styled from "@emotion/styled";

const TeacherHomeDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  gap: 15px;
  h3 {
    font-size: 21px;
    margin-bottom: 10px;
    color: #333;
  }
  .student-count {
    display: flex;
    height: 50px;
    background: #f7f7f7;
    box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
    padding: 8px 15px;
    border-radius: 3px;
    h3 {
      width: 6.3%;
      font-size: 21px;
      border-right: 1px solid #ccc;
      margin-right: 15px;
      margin-bottom: 0;
      padding-right: 15px;
    }
    .class-status {
      width: 100%;
      height: 100%;
      font-size: 21px;
      font-weight: 600;
      color: #176b87;
      > span {
        display: inline-block;
        &:nth-of-type(3) {
          margin-right: 0;
        }
      }
      .student-num {
        font-weight: 600;
        margin-left: 10px;
        color: #64ccc5;
        text-decoration: underline;
      }
    }
  }
  .teacher-home-bottom {
    display: flex;
    gap: 15px;
    height: 120%;
    .teacher-home-left {
      display: flex;
      flex-flow: column nowrap;
      width: 100%;
      height: 100%;
      box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
      background: #f7f7f7;
      padding: 15px;
      border-radius: 5px;
      .class-mock-record {
        height: 100%;
      }
      .class-school-record {
        height: 100%;
      }
    }
    .teacher-home-right {
      width: 100%;
      height: 100%;
      display: flex;
      flex-flow: column;
      gap: 15px;
      .time-table {
        height: 100%;
        background: #f7f7f7;
        box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
        padding: 15px;
        border-radius: 5px;
      }
      .calendar {
        height: 65%;
      }
    }
  }
`;

const ClassSchoolRecordDiv = styled.div`
  background: #fff;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  height: 30vh;
  width: 100%;
`;

const TeacherTimeTableDiv = styled.div`
  width: 100%;
  height: 100%;
  font-size: 16px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  > ul {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(9, 3vh);
    > li:nth-of-type(6) {
      background: #eee;
      > ul {
        display: grid;
        grid-template-columns: 1fr 5fr;
        > li {
        }
      }
    }
    > li {
      line-height: 3vh;
      :first-of-type {
        background: #176b87;
        color: #fff;
      }
      :not(:first-of-type) {
        border-top: 1px solid #ccc;
      }
      > ul {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        > li {
          :first-of-type {
            background: #176b87;
            color: #fff;
          }
          :not(:first-of-type) {
            font-size: 16px;
          }
          :not(:last-of-type) {
            border-right: 1px solid #ccc;
          }
        }
      }
      > ul.class {
        > li {
          :first-of-type {
            background: #176b87;
          }
        }
      }
    }
  }
`;

const FullCalendarDiv = styled.div`
  width: 100%;
  background: #f7f7f7;
  padding: 5px 15px 15px;
  border-radius: 5px;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  .fc {
    width: 100%;
    color: #333;
    .fc-button-primary {
      background: transparent;
      border-color: transparent;
      color: #000;
      font-size: 15px;
      font-weight: 900;
    }
    .fc-header-toolbar {
      position: relative;
      justify-content: center;
      gap: 30px;
      margin-bottom: 3px;
      .fc-toolbar-title {
        font-size: 24px;
      }
      .fc-prev-button {
        background: transparent;
        border-color: transparent;
        color: #000;
        font-size: 15px;
        font-weight: 900;
        :hover {
          color: #000 !important;
          background: transparent !important;
        }
        :focus {
          box-shadow: none !important;
          background: "none" !important;
        }
      }
      .fc-next-button {
        background: transparent;
        border-color: transparent;
        color: #000;
        font-size: 15px;
        font-weight: 900;
        :hover {
          color: #000 !important;
          background: transparent !important;
        }
        :focus {
          box-shadow: none !important;
          background: "none" !important;
        }
      }
      .fc-today-button {
        position: absolute;
        right: 1px;
        bottom: 0px;
        font-size: 12px;
        font-weight: 400;
        background: #2c3e50;
        color: #fff;
        cursor: pointer;
      }
    }
    .fc-scroller-harness {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
    .fc-col-header {
      background: #176b87;
      height: 3vh;
      .fc-col-header-cell-cushion {
        color: #fff;
        font-size: 15px;
        font-weight: 400;
        line-height: 3vh;
      }
    }
    .fc-scrollgrid-section {
      background: #fff;
    }
    .fc-daygrid-day-top {
      .fc-daygrid-day-number {
        padding: 4px 2px 0px;
        font-size: 12px;
      }
    }
    .fc-daygrid-day-events {
      margin: 0;
      line-height: 1.5;
      font-size: 15px;
    }
    .fc-view-harness {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      overflow: hidden;
    }
    .fc-day-today {
      background: #f1f6f9;
    }
    .fc-event {
      height: 18px !important;
      margin: 1px !important;
      .fc-event-main {
        height: 100% !important;
        line-height: 15px !important;
        .fc-event-main-frame {
          height: 100%;
          .fc-event-title {
            padding-left: 3px;
            font-size: 12px;
          }
        }
      }
    }
    .fc-view-harness {
      box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2) !important;
    }
  }
`;

export {
  TeacherHomeDiv,
  ClassSchoolRecordDiv,
  TeacherTimeTableDiv,
  FullCalendarDiv,
};
