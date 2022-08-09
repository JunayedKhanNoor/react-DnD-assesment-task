import { COMPONENT, ROW, COLUMN } from './constants';

const initialData = {
  layout: [
    {
      type: ROW,
      id: 'row0',
      children: [
        {
          type: COLUMN,
          id: 'column0',
          children: [
            {
              type: COMPONENT,
              id: 'component0',
            },
            {
              type: COMPONENT,
              id: 'component1',
            },
          ],
        },
        {
          type: COLUMN,
          id: 'column1',
          children: [
            {
              type: COMPONENT,
              id: 'component2',
            },
          ],
        },
        {
          type: COLUMN,
          id: 'column3',
          children: [
            {
              type: COMPONENT,
              id: 'component3',
            },
          ],
        },
      ],
    },
    {
      type: ROW,
      id: 'row1',
      children: [
        {
          type: COLUMN,
          id: 'column2',
          children: [
            {
              type: COMPONENT,
              id: 'component3',
            },
            {
              type: COMPONENT,
              id: 'component0',
            },
          ],
        },
      ],
    },
  ],
  components: {
    component0: { id: 'component0', type: 'XpeedStudio', content: 'Giant Software Company' },
    component1: { id: 'component1', type: 'input', content: 'Some input' },
    component2: { id: 'component2', type: 'email', content: 'Some email' },
    component3: { id: 'component3', type: 'name', content: 'Some name' },
    component4: { id: 'component4', type: 'phone', content: 'Some phone' },
    component5: { id: 'component5', type: 'image', content: 'Some image' },
    component6: { id: 'component6', type: 'row', content: 'Draggable Item' },
    component7: { id: 'component7', type: 'column', content: 'Draggable Item' },
  },
};

export default initialData;
