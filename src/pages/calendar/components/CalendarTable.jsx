import { Text } from "@chakra-ui/react";
import { useState } from "react";
import { AddAppointmentForm } from "../../../components/AddAppointmentForm";
import { Data } from "../../../components/Data";
import { DocData } from "../../../components/DocData";
import { Doctors } from "../../../components/Doctors";
import { Event } from "../../../components/Event";

export const CalendarTable = () => {
  const [state, setState] = useState({ rows: Data });

  const updateData = async (data, rowId, docId) => {
    let rows = [...state.rows];
    rows[rowId].doc[docId] = {
      ...data,
    };

    return rows;
  };

  const handleChange = (data, rowId, docId) => {
    updateData(data, rowId, docId).then((data) => {
      setState({ rows: data });
    });
  };

  return (
    <div>
      <div className="container">
        <div className="row clearfix">
          <div className="col-md-12 column">
            <table className="table table-bordered table-hover" id="tab_logic">
              <thead>
                <tr>
                  <th style={{ borderBottomStyle: "hidden" }}></th>
                  {DocData.map((data, id) => {
                    return (
                      <th key={id}>
                        <Doctors name={data.name} url={data.url} />
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {Data.map((data, rowId) => {
                  return (
                    <tr key={rowId}>
                      <td className="time">
                        <Text>
                          <small>{data?.time}</small>
                        </Text>
                      </td>

                      {data.doc.map((item, docId) => {
                        return (
                          <>
                            {/* IF THAT POSITION ALREADY HAS DATA DISPLAY IT 
                          ELSE CHANGE TO INPUT FIELD */}

                            <td key={docId} className="lg-padding">
                              {state.rows[rowId]?.doc[docId]?.patient ? (
                                <Event
                                  type={state.rows[rowId]?.doc[docId]?.type}
                                  title={state.rows[rowId]?.doc[docId]?.title}
                                  patientName={
                                    state.rows[rowId]?.doc[docId]?.patient
                                  }
                                  fromTime={
                                    state.rows[rowId]?.doc[docId]?.fromTime
                                  }
                                  toTime={state.rows[rowId]?.doc[docId]?.toTime}
                                  fromDate={
                                    state.rows[rowId]?.doc[docId]?.fromDate
                                  }
                                  toDate={state.rows[rowId]?.doc[docId]?.toDate}
                                  doctor={state.rows[rowId]?.doc[docId]?.doctor}
                                  note={state.rows[rowId]?.doc[docId]?.note}
                                />
                              ) : (
                                <AddAppointmentForm
                                  onSubmit={(data) =>
                                    handleChange(data, rowId, docId)
                                  }
                                />
                              )}
                            </td>
                          </>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
