export default {
  contactCoach(context, payload) {
    const newRequest = {
      id: new Date().toISOString,
      userEmail: payload.email,
      message: payload.message,
      coachId: payload.coachId,
    };
    context.commit('addRequest', newRequest);
  },
};
