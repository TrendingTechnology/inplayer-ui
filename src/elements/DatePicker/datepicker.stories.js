/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';
import DatePicker from './index';
import moment from '../../../../../.cache/typescript/3.7/node_modules/moment/moment';
import Typography from '../Typography/index';

export default {
  component: DatePicker,
  title: 'DatePicker',
};

const Container = styled.div`
  margin: auto;
  margin-top: 2%;
  width: 90%;
`;

class DatePickerExample extends React.Component {
  constructor() {
    super();

    this.state = {
      startDate: moment().subtract(1, 'month'),
      endDate: moment(),
      focusedInput: null,
    };

    this.onDateChange = this.onDateChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDateChange({ startDate, endDate }) {
    this.setState({
      startDate,
      endDate,
    });
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }

  render() {
    return (
      <DatePicker
        startDate={this.state.startDate}
        startDateId="startDate"
        endDate={this.state.endDate}
        endDateId="endDate"
        onDateChange={this.onDateChange}
        displayPresets={['default']}
        isOutsideRange={() => false}
        onFocusChange={this.onFocusChange}
        focusedInput={this.state.focusedInput}
        customAllTimeDate={1514208111}
        activePeriodPreset="last month"
      />
    );
  }
}

export const Demo = () => (
  <Container>
    <Typography variant="h3">Date Picker</Typography>
    <Typography variant="p" description>
      DatePicker is a component for picking range for dates. It takes:
      <br />
      <b>- startDate</b> and <b>endDate</b> as a prop( momentPropTypes.momentObj or null)
      <br />- <b>startDateId</b> and <b>endDateId</b>
      <br />- <b>onDateChange</b> function for setting the state for the dates
      <br />- <b>displayPresets</b> prop is an array where the user defines which presets to be
      displayed to the date picker. Available presets are: this week, last week, last 2 weeks, this
      month, last month, last 6 months, this year, all time. Default option is available as well and
      if the user adds only default prop to the array, following presets will be displayed: this
      week, last week, this month, last month, this year,
      <br />- <b>isOutsideRange</b> a function which specifies the days that are not allowed to be
      choosed (ex. isOutsideRange=
      {day => day.isBefore(moment())}).
      <br />- <b>customAllTimeDate</b> a timestamp that defines from which date the all time starts
      in the preset
      <br />- <b>activePeriod</b> prop is a string where the user defines which presets period to be
      selected to the date picker. Available presets periods are those present in displayPresets
    </Typography>
    <DatePickerExample />
  </Container>
);
