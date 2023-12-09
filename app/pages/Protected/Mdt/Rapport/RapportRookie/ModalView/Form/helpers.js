import Api from "../../../../../../../services/api/instance";

export const saveCreateRapportRookie = (report, acquisitions) => {
  return new Promise(async (resolve, reject) => {
    try {
      const acquisitPromise = await Api.post(
        `/report_rookie_acquisitions`,
        acquisitions
      );
      const AcquisitionId = acquisitPromise.data.id;
      const reportBody = {
        ...report,
        acquisitions: `api/report_rookie_acquisitions/${AcquisitionId}`,
      };
      const acquisitionPromise = await Api.post(`/rookie_reports`, reportBody);
      const resolveData = {
        ...acquisitionPromise.data,
        ...report,
        acquisitions: acquisitions,
        createdAt: { date: acquisitionPromise.data.createdAt },
      };
      resolve(resolveData);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

export const fetchRookieLists = (params) => {
  return Api.get(`/agents/rookies/list}`, params);
};
