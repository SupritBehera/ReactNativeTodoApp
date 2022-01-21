import {appSchema, tableSchema} from '@nozbe/watermelondb';

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'tasks',
      columns: [
        {name: 'task_name', type: 'string'},
        {name: 'is_complete', type: 'boolean'},
        {name: 'time_created', type: 'string'},
        {name: 'date_created', type: 'string'},
      ],
    }),
  ],
});
