declare module 'react-datepicker-hijri' {
    import { Component } from 'react';
  
    interface DatePickerProps {
      selected: Date | null;
      onChange: (date: Date | null) => void;
      dateFormat?: string;
      placeholderText?: string;
      wrapperClassName?: string;
      calendarClassName?: string;
      popperClassName?: string;
      className?: string;
    }
  
    class DatePickerHijri extends Component<DatePickerProps> {}
  
    export default DatePickerHijri;
  }
  