import Model from '@nozbe/watermelondb/Model';
import {field, text} from '@nozbe/watermelondb/decorators';

import {text} from 'body-parser';

export default class Task extends Model {
  static table = 'tasks';
  @text('task_name') taskName;
  @field('is_complete') isComplete;
  @field('time_created') timeCreated;
  @field('date_created') dateCreated;
}
