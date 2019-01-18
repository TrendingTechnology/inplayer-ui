// @flow
import React from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';

import DateRangePickerWrapper from './DateRangePickerWrapper';
import Label from '../Label';

const THIS_WEEK = 'this week';
const LAST_WEEK = 'last week';
const THIS_MONTH = 'this month';
const LAST_MONTH = 'last month';
const THIS_YEAR = 'this year';

type Props = {
  startDate: string,
  endDate: string,
  startDateId?: string,
  endDateId?: string,
  calendarInfo: boolean,
  isOutsideRange: boolean,
  onDateChange: Function,
  style?: Object,
  className?: string,
};

type State = {
  focusedInput: ?string,
};

type Period = THIS_WEEK | LAST_WEEK | THIS_MONTH | LAST_MONTH | THIS_YEAR;

class DatePicker extends React.Component<Props, State> {
  state = {
    focusedInput: null,
  };

  onFocusedInputChange = (focusedInput: string) => {
    this.setState({
      focusedInput,
    });
  };

  handleRangeClick = (activePeriod: Period) => {
    let startDate = moment().startOf('day');
    let endDate = moment().endOf('day');

    switch (activePeriod) {
      case THIS_WEEK:
        endDate = startDate.add(7, 'days');
        startDate = moment().endOf('day');
        break;
      case LAST_WEEK:
        startDate = startDate.subtract(7, 'days');
        break;
      case THIS_MONTH:
        endDate = startDate.add(1, 'month');
        startDate = moment().endOf('day');
        break;
      case LAST_MONTH:
        startDate = startDate.subtract(1, 'months');
        break;
      case THIS_YEAR:
        startDate = startDate.subtract(1, 'year');
        break;
      default:
        break;
    }
    const { onDateChange } = this.props;
    onDateChange({ startDate, endDate });
  };

  renderDatePresets = () => {
    const presets = [THIS_WEEK, LAST_WEEK, THIS_MONTH, LAST_MONTH, THIS_YEAR];
    return (
      <div className="datepreset">
        {presets.map((text, i) => (
          <Label key={i} onClick={() => this.handleRangeClick(text)}>
            {text}
          </Label>
        ))}
      </div>
    );
  };

  render() {
    const {
      onDateChange,
      startDate,
      endDate,
      calendarInfo,
      startDateId,
      endDateId,
      isOutsideRange,
      style,
      className,
    } = this.props;

    const { focusedInput } = this.state;

    return (
      <DateRangePickerWrapper style={style} className={className}>
        <DateRangePicker
          isOutsideRange={isOutsideRange}
          onDatesChange={onDateChange}
          onFocusChange={this.onFocusedInputChange}
          renderCalendarInfo={this.renderDatePresets}
          focusedInput={focusedInput}
          startDate={startDate}
          startDateId={startDateId || 'startDate'}
          endDate={endDate}
          endDateId={endDateId || 'endDate'}
          customArrowIcon="to"
          readOnly
          calendarInfoPosition={calendarInfo && 'before'}
        />
      </DateRangePickerWrapper>
    );
  }
}

DatePicker.defaultProps = {
  startDateId: 'startDate',
  endDateId: 'endDate',
  style: {},
  className: '',
};

export default DatePicker;