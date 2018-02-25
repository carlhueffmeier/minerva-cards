// Location in the state tree
const getTemplates = state => state.templates;

// Returns array of all templates
const getAllTemplates = state => {
  const templates = getTemplates(state);
  return templates.allIds.map(id => templates.byId[id]);
};

// Returns the template
const getTemplateById = (state, id) => {
  const templates = getTemplates(state);
  return templates.byId[id];
};

export default {
  getTemplates,
  getAllTemplates,
  getTemplateById
};
