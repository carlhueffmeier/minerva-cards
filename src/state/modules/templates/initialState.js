const initialState = {
  byId: {
    'basic-standard': {
      id: `basic-standard`,
      name: `Standard`,
      front: `Q: {{Question}}`,
      back: `{{Front}}<br>A: {{Answer}}`
    },
    'basic-reverse': {
      id: `basic-reverse`,
      name: `Reverse`,
      front: `Q: {{Answer}}`,
      back: `{{Front}}<br>A: {{Question}}`
    }
  },
  allIds: [`basic-standard`, `basic-reverse`]
};

export default initialState;
