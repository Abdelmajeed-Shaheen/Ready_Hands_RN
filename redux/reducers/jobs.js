//Action Type
import { SET_JOBS, GET_WORKER_APPLIED_JOBS } from "../actions/actionTypes";

const initialState = {
  jobs: [],
  applied_jobs: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_JOBS:
      const jobs = payload.filter((job) => job.status === "P");
      return { ...state, jobs: jobs };

    case GET_WORKER_APPLIED_JOBS:
      const applied_job = payload;

      return { ...state, applied_jobs: applied_job };

    default:
      return state;
  }
};
