import Picker from './Picker'
import moment from 'moment'
import TimePicker from './TimePicker'
import Pikaday from 'pikaday'
const pickerModule = {
  pick: function (options, confirmCallback, cancelCallback) {
    options.height = weex && weex.config.env.scale && options.height ? +options.height.replace('px','') / weex.config.env.scale : options.height
    options.data = options.items
    options.defaultIndexs = options.index
    options.confirmCallback = confirmCallback
    options.cancelCallback = cancelCallback
    options.sender = this.sender
    new Picker(options)
  },
  pickDate: function (options, confirmCallback) {
    const mask = document.createElement('div')
    mask.className = 'weex-picker-mask'
    const self = this
    const i18n = {
        previousMonth: 'Previous Month',
        nextMonth: 'Next Month',
	    months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
	    weekdays: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
	    weekdaysShort: ['日', '一', '二', '三', '四', '五', '六']
    }
    
    //options see https://github.com/dbushell/Pikaday#configuration.
    const picker = new Pikaday({
      field: options.field,
      trigger: options.trigger,
      bound: options.bound,
      ariaLabel: options.ariaLabel,
      position: options.position,
      reposition: options.reposition,
      container: options.container,
      formatStrict: options.formatStrict,
      toString: options.toString,
      parse: options.parse,
      firstDay: options.firstDay || null,
      disableWeekends: options.disableWeekends || false,
      disableDayFn: options.disableDayFn,
      yearRange: options.yearRange || [1900, 2050],
      showWeekNumber: options.showWeekNumber || false,
      pickWholeWeek: options.pickWholeWeek || false,
      isRTL: options.isRTL,
      i18n: options.i18n || i18n,
      yearSuffix: options.yearSuffix || '',
      showMonthAfterYear: options.showMonthAfterYear,
      showDaysInNextAndPreviousMonths: options.showDaysInNextAndPreviousMonths,
      enableSelectionDaysInNextAndPreviousMonths: options.enableSelectionDaysInNextAndPreviousMonths,
      numberOfMonths: options.numberOfMonths,
      mainCalendar: options.mainCalendar,
      events: options.events || [],
      theme: options.theme || null,
      blurFieldOnSelect: options.blurFieldOnSelect,
      onOpen: options.onOpen,
      onClose: options.onClose,
      onDraw: options.onDraw,
      keyboardInput: options.keyboardInput,
      defaultDate: moment(options.value, 'YYYY-MM-DD').toDate(),
      setDefaultDate: moment(options.value, 'YYYY-MM-DD').toDate(),
      format: 'YYYY-MM-DD',
      minDate: moment(options.min, 'YYYY-MM-DD').toDate(),
      maxDate: moment(options.max, 'YYYY-MM-DD').toDate(),
      onSelect: function (date) {
        confirmCallback && self.sender.performCallback(confirmCallback, {
          result: 'success',
          data: moment(date).format('YYYY-MM-DD')
        })
        picker.destroy()
        mask.parentNode.removeChild(mask)
      }
    })
    mask.appendChild(picker.el)
    document.body.appendChild(mask)
  },
  pickTime: function (options, confirmCallback) {
    options.height = weex && weex.config.env.scale && options.height ? +options.height.replace('px','') / weex.config.env.scale : options.height
    options.value = options.value;
    options.confirmCallback = confirmCallback;
    options.sender = this.sender;
    new TimePicker(options);
  }
}
const meta = {
  picker: [{
    name: 'pick',
    args: ['object', 'function']
  }, {
    name: 'pickDate',
    args: ['object', 'function']
  }, {
    name: 'pickTime',
    args: ['object', 'function']
  }]
}
export default {
  init: function (Weex) {
    Weex.registerApiModule('picker', pickerModule, meta)
  }
}
