import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cyrillicToTransliteration from 'cyrillic-to-translit-js';
import {TextField} from "../TextField/TextField";
import {shallowEqual} from "react-redux";

/**
 * Создание
 * 1. поле автоматически заполняется при заполнении поля title
 * 2. если пользователь то-то поменял в этом поле авто заполнение прекращается и поле остается как есть
 *
 * Обновление
 * 1. если поле сгенерировано автоматиески то эта генераия продолжается
 * */

/**
 * @desc компонент для автоматической генерации валидного url псевдонима
 * */
export class URLAliasField extends Component {

  static propTypes = {
    /** активна ли автогенерация транслита */
    isAutoGenTransliteration: PropTypes.bool,
    /** value формы */
    formValues: PropTypes.bool,
    /** название поля на основе которого будет создаватся транслит */
    subscribeField: PropTypes.string,
  };
  static defaultProps = {
    isAutoGenTransliteration: true,
  };


  constructor(props){
    super(props);
    this.state = this.initialValues;
  }

  get initialValues(){
    return {
      prevValue: null,
      autoGen: this.props.isAutoGenTransliteration,
    }
  }

  componentDidUpdate(prevProps, prevState, prevContext) {
    const {input: newInput, meta: newMeta} = this.props;
    const {input: prevInput} = prevProps;

    if (newMeta.visited && newMeta.active) {
      if (newInput.value !== prevInput.value) {
        this.setState({
          autoGen: false
        })
      }
    }
  }


  shouldComponentUpdate(nextProps, nextState) {
    const {input, formValues, subscribeField} = nextProps;
    if (this.state.autoGen) {
      if (
        (this.props.formValues && nextProps.formValues)
        && (this.props.formValues[subscribeField] !== formValues[subscribeField])
      ) {
        const value = this.transformString(formValues[subscribeField]);
        input.onChange(value);
        return true;
      }
      if (
        nextProps.formValues
        && (formValues[subscribeField] || !formValues[subscribeField])
      ) {
        const value = this.transformString(formValues[subscribeField]);
        input.onChange(value);
        return true;
      }
    }
    return !shallowEqual(nextProps, this.props)
  }


  /**
   * @param {string} word
   * @return {string}
   * @desc чистка строки от спец символов
   * */
  clearString = (word) => {
    try {
      return word && word.replace(/[^a-zA-Zа-яА-Я0-9 ]/gi, '')
        .replace(/\s\s+/g, ' ');
    } catch (e) {
      console.log(e);
      return word;
    }
  };

  /**
   * @param {string} word
   * @return {string}
   * @desc чистка строки от спец символов
   * */
  transformString = (word) => {
    return cyrillicToTransliteration().transform(this.clearString(word), '-');
  };

  render() {
    return (<TextField
      {...this.props}
    />)
  }
}

export default URLAliasField;
