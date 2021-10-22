// src/main.js
// import answer from 'the-answer';

// enum ViewMode {
//   QUARTER_DAY= 'Quarter Day',
//   HALF_DAY= 'Half Day',
//   DAY= 'Day',
//   WEEK= 'Week',
//   MONTH= 'Month',
//   YEAR= 'Year'
// }

type Task = {
  name: string,
  start: string,
  end: string,
  id: string,
  progress?: number,
}

type GanttOptions = {
  view_mode?: string,
  draggable: boolean,
  resizeable: boolean,
  isPop: boolean,
  on_contextmenu: () => {}
}

export default class Gantt {
  constructor(wrapper: string | Element, tasks: Task[], options: GanttOptions) {
    this.setup_wrapper(wrapper);
  }

  private setup_wrapper(element: string | Element) {
  }
}