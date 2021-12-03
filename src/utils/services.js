const getJob = (jobs, id) => {
  return jobs.find(job => job.id === id);
};

export default getJob;