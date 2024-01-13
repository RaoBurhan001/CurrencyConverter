import { useId } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const InputBox = ({ label, className = '', currency, onCurrencyChange, currencyOptions = [], amount, onAmountChange, amountDisable }) => {
  const amountInputId = useId();

  return (
    <div className={`bg-white p-6 rounded-lg shadow-md text-sm flex ${className}`}>
      <div className="w-1/2 pr-4">
        <label className='text-gray-600 mb-2 block' htmlFor={amountInputId}>
          {label}
        </label>
        <input
          id={amountInputId}
          className='outline-none w-full bg-transparent py-2 border-b border-gray-300'
          type='number'
          placeholder={'Amount'}
          value={amount.toString()}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          disabled={amountDisable}
        />
      </div>
      <div className='w-1/2 flex flex-col justify-end text-right'>
        <label className='text-gray-600 mb-2 block'>Currency Type</label>
        <Select
          className="rounded-lg px-2 py-1 bg-gray-100 cursor-pointer outline-none"
          name='color'
          value={currency}
          options={currencyOptions}
          onChange={onCurrencyChange}
        />
      </div>
    </div>
  );
};

InputBox.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  currency: PropTypes.string,
  onCurrencyChange: PropTypes.func,
  currencyOptions: PropTypes.array,
  amount: PropTypes.number,
  onAmountChange: PropTypes.func,
  amountDisable: PropTypes.bool,
};

export default InputBox;
