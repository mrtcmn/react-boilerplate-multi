import PropTypes from 'prop-types';
import React, { useState, useRef, createRef, useEffect } from 'react';
import exact from 'prop-types-exact';
import { View, Text, Platform } from 'react-native';
import {
  TextInput,
  HelperText,
  RadioButton,
  Checkbox,
  DefaultTheme,
  Modal,
  Button,
  Provider,
  Portal,
} from 'react-native-paper';
import TextInputMask from 'react-native-text-input-mask';
import DropDown from 'react-native-paper-dropdown';
import { colorThemes } from '@mobile/src/styles/colors';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format, parse } from 'date-fns';
import ButtonCLR from '@mobile/utils/ButtonCLR';
import { useTranslation } from 'react-i18next';
import _styles from '../src/styles/utils/formElement';

const theme = {
  ...DefaultTheme,
  roundness: 10,
  colors: {
    ...DefaultTheme.colors,
    primary: colorThemes.whiteVersion.$primaryColorVivid,
    accent: colorThemes.whiteVersion.$primaryColorVividBright,
  },
};

export const PSInputMobil = ({
  onChange,
  secureTextEntry,
  type,
  right,
  field: { name, onBlur, value },
  form: { errors, touched, setFieldTouched },
  rightIcon,
  ...props
}) => {
  return (
    <View style={_styles['ps-input']}>
      <TextInput
        mode="outlined"
        style={_styles.textInput}
        type="number"
        underlineColor={
          touched[name] && !errors[name]
            ? colorThemes.whiteVersion.$greenSuccess
            : colorThemes.whiteVersion.$primaryColor
        }
        selectionColor={colorThemes.whiteVersion.$primaryColor}
        placeholderTextColor={colorThemes.whiteVersion.$primaryColor}
        outlineColor={
          touched[name] && !errors[name]
            ? colorThemes.whiteVersion.$greenSuccess
            : colorThemes.whiteVersion.$primaryColor
        }
        error={touched[name] && errors[name]}
        value={value}
        onChangeText={(text) => onChange(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        right={rightIcon}
        secureTextEntry={secureTextEntry}
        theme={theme}
        {...props}
      />
      <HelperText type="error" style={_styles.helperText}>
        {touched[name] && errors[name] ? (
          <Text style={_styles.errorText}> {errors[name]}</Text>
        ) : (
          <Text style={_styles.errorText} />
        )}
      </HelperText>
    </View>
  );
};

PSInputMobil.propTypes = exact({
  field: PropTypes.shape({
    name: PropTypes.string,
    onBlur: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  onChange: PropTypes.func,
  type: PropTypes.string,
  label: PropTypes.node,
  form: PropTypes.shape({
    touched: PropTypes.objectOf(PropTypes.bool),
    errors: PropTypes.objectOf(PropTypes.string),
    setFieldTouched: PropTypes.func,
  }),
  children: PropTypes.node,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
  icon: PropTypes.element,
  autocomplete: PropTypes.string,
  right: PropTypes.object,
  primary: PropTypes.bool,
});
PSInputMobil.defaultProps = {
  form: {},
  field: {},
  label: '',
  children: React.ReactNode,
  type: '',
  placeholder: '',
  value: '',
  disabled: false,
  secureTextEntry: false,
  right: {},
  primary: false,
  icon: <div />,
  autocomplete: '',
  onChange: () => {},
};

export const PSCheckboxMobil = ({
  value,
  onChange,
  label,
  field: { name },
  form: { errors, touched },
  ...props
}) => {
  return (
    <View style={_styles['ps-checkbox']}>
      <Checkbox.Item
        mode="android"
        color={colorThemes.whiteVersion.$primaryColorVivid}
        labelStyle={[
          _styles.checkboxLabel,
          {
            color:
              touched[name] && errors[name]
                ? colorThemes.whiteVersion.$redWarning
                : colorThemes.whiteVersion.$primaryGrayDarker,
          },
        ]}
        label={label}
        status={value}
        theme={theme}
        {...props}
        onPress={() => onChange(value === 'checked' ? 'unchecked' : 'checked')}
      />
      <HelperText type="error" style={_styles.helperText}>
        {touched[name] && errors[name] ? (
          <Text style={_styles.errorText}> {errors[name]}</Text>
        ) : (
          <Text style={_styles.errorText} />
        )}
      </HelperText>
    </View>
  );
};

PSCheckboxMobil.propTypes = exact({
  field: PropTypes.shape({
    name: PropTypes.string,
  }),
  label: PropTypes.node,
  form: PropTypes.shape({
    touched: PropTypes.objectOf(PropTypes.bool),
    errors: PropTypes.objectOf(PropTypes.string),
  }),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onChange: PropTypes.func,
  children: PropTypes.node,
});
PSCheckboxMobil.defaultProps = {
  form: {},
  field: {},
  label: '',
  value: '',
  onChange: () => {},
  children: React.ReactNode,
};

export const PSRadioMobil = ({
  value,
  onChange,
  option,
  field: { name },
  form: { errors, touched },
  ...props
}) => {
  return (
    <View style={_styles['ps-radio']}>
      <View className="ps-content">
        <RadioButton.Group
          onValueChange={(values) => onChange(values)}
          value={value}
          theme={theme}
          {...props}
        >
          {React.Children.toArray(
            option.map((item) => (
              <RadioButton.Item
                mode="android"
                label={item.label}
                value={item.valueKey}
                color={colorThemes.whiteVersion.$primaryColorVivid}
                labelStyle={[
                  _styles.radioLabel,
                  {
                    color:
                      touched[name] && errors[name]
                        ? colorThemes.whiteVersion.$redWarning
                        : colorThemes.whiteVersion.$primaryGrayDarker,
                  },
                ]}
              />
            ))
          )}
        </RadioButton.Group>
      </View>
      <HelperText type="error" style={_styles.helperText}>
        {touched[name] && errors[name] ? (
          <Text style={_styles.errorText}> {errors[name]}</Text>
        ) : (
          <Text style={_styles.errorText} />
        )}
      </HelperText>
    </View>
  );
};

PSRadioMobil.propTypes = exact({
  field: PropTypes.shape({
    name: PropTypes.string,
    onBlur: PropTypes.func,
    value: PropTypes.bool,
  }),
  option: PropTypes.array,
  form: PropTypes.shape({
    touched: PropTypes.objectOf(PropTypes.bool),
    errors: PropTypes.objectOf(PropTypes.string),
  }),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onChange: PropTypes.func,
  children: PropTypes.node,
});
PSRadioMobil.defaultProps = {
  form: {},
  field: {},
  option: [],
  value: '',
  onChange: () => {},
  children: React.ReactNode,
};

export const PSInputMaskMobil = ({
  mask,
  label,
  placeholder,
  onChange,
  field: { name, onBlur, value },
  form: { errors, touched, setFieldTouched },
  disabled,
  ...props
}) => {
  const a = createRef();

  return (
    <View style={_styles['ps-input']}>
      <TextInput
        mode="outlined"
        theme={theme}
        style={_styles.textInput}
        underlineColor={
          touched[name] && !errors[name]
            ? colorThemes.whiteVersion.$greenSuccess
            : colorThemes.whiteVersion.$primaryColor
        }
        selectionColor={colorThemes.whiteVersion.$primaryColor}
        outlineColor={
          touched[name] && !errors[name]
            ? colorThemes.whiteVersion.$greenSuccess
            : colorThemes.whiteVersion.$primaryColor
        }
        error={touched[name] && errors[name]}
        label={label}
        placeholder={placeholder}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        render={(b) => (
          <TextInputMask
            {...b}
            ref={a}
            value={value}
            onChangeText={(text) => {
              b.onChangeText?.(text);
              onChange(text);
            }}
            theme={theme}
            mask={mask}
          />
        )}
        disabled={disabled}
      />
      <HelperText type="error" style={_styles.helperText}>
        {touched[name] && errors[name] ? (
          <Text style={_styles.errorText}> {errors[name]}</Text>
        ) : (
          <Text style={_styles.errorText} />
        )}
      </HelperText>
    </View>
  );
};

PSInputMaskMobil.propTypes = exact({
  field: PropTypes.shape({
    name: PropTypes.string,
    onBlur: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  onChange: PropTypes.func,
  label: PropTypes.node,
  mask: PropTypes.string,
  form: PropTypes.shape({
    touched: PropTypes.objectOf(PropTypes.bool),
    errors: PropTypes.objectOf(PropTypes.string),
    setFieldTouched: PropTypes.func,
  }),
  children: PropTypes.node,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  icon: PropTypes.element,
  autocomplete: PropTypes.string,
});
PSInputMaskMobil.defaultProps = {
  form: {},
  field: {},
  label: '',
  mask: '',
  children: React.ReactNode,
  type: '',
  placeholder: '',
  value: '',
  disabled: false,
  icon: <div />,
  autocomplete: '',
  onChange: () => {},
};

export const PSDropdownMobil = ({
  listData,
  label,
  placeholder,
  onChange,
  id,
  field: { name, value },
  form: { errors, touched },
  ...props
}) => {
  const [showMultiSelectDropDown, setShowMultiSelectDropDown] = useState(false);

  return (
    <View style={_styles['ps-dropdown']}>
      <DropDown
        dropDownItemSelectedTextStyle={_styles.dropdownSelectedText}
        dropDownItemTextStyle={_styles.dropdownText}
        label={label}
        placeholder={placeholder}
        mode="outlined"
        visible={showMultiSelectDropDown}
        showDropDown={() => setShowMultiSelectDropDown(true)}
        onDismiss={() => setShowMultiSelectDropDown(false)}
        value={value}
        setValue={(a) => onChange(a)}
        list={listData}
        theme={theme}
        {...props}
      />
      <HelperText type="error" style={_styles.helperText}>
        {touched[name] && errors[name] ? (
          <Text style={_styles.errorText}> {errors[name]}</Text>
        ) : (
          <Text style={_styles.errorText} />
        )}
      </HelperText>
    </View>
  );
};

PSDropdownMobil.propTypes = exact({
  field: PropTypes.shape({
    name: PropTypes.string,
    onBlur: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  label: PropTypes.node,
  listData: PropTypes.array,
  onChange: PropTypes.func,
  form: PropTypes.shape({
    touched: PropTypes.objectOf(PropTypes.bool),
    errors: PropTypes.objectOf(PropTypes.string),
    setFieldTouched: PropTypes.func,
  }),
  placeholder: PropTypes.string,
  children: PropTypes.node,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
});
PSDropdownMobil.defaultProps = {
  form: {},
  field: {},
  listData: [],
  label: '',
  onChange: () => {},
  placeholder: '',
  value: '',
  id: '',
  children: React.node,
};

export const PSDatePickerMobil = ({
  label,
  placeholder,
  onChange,
  maxDate,
  field: { name, value, onBlur },
  form: { errors, touched, setFieldTouched },
  ...props
}) => {
  const { t } = useTranslation();

  let dateTextFieldRef = useRef(null);
  const [date, setDate] = useState(new Date(1598051730000));
  const [openModal, setOpenModal] = useState(false);
  const [show, setShow] = useState(false);
  const triggerDatePickerClick = () => {
    setShow(true);
    setOpenModal(true);
  };

  useEffect(() => {
    const cnvrDate = parse(value, 'dd.MM.yyyy', new Date());
    setDate(cnvrDate);
  }, [value]);

  return (
    <View style={_styles['ps-datepicker']}>
      <TextInput
        mode="outlined"
        ref={(ref) => (dateTextFieldRef = ref)}
        spellCheck
        multiline={false}
        onTouchStart={triggerDatePickerClick}
        value={value.toString()}
        label={label}
        placeholder={placeholder}
        editable
        keyboardType="default"
        style={_styles.textInput}
        underlineColor={
          touched[name] && !errors[name]
            ? colorThemes.whiteVersion.$greenSuccess
            : colorThemes.whiteVersion.$primaryColor
        }
        selectionColor={colorThemes.whiteVersion.$primaryColor}
        outlineColor={
          touched[name] && !errors[name]
            ? colorThemes.whiteVersion.$greenSuccess
            : colorThemes.whiteVersion.$primaryColor
        }
        error={touched[name] && errors[name]}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        theme={theme}
        {...props}
      />
      {Platform.OS === 'ios' ? (
        <Portal>
          <Modal
            visible={openModal}
            onDismiss={() => setOpenModal(!openModal)}
            style={{
              justifySelf: 'center',
              margin: 20,
              borderRadius: 10,
            }}
          >
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              is24Hour
              display="spinner"
              onChange={(event, selectedDate) => {
                const _ndate = format(new Date(selectedDate), 'dd.MM.yyyy');
                onChange(_ndate);
              }}
              style={{ backgroundColor: 'white' }}
            />
            <Button mode="contained" onPress={() => setOpenModal(!openModal)}>
              {t('date_select')}
            </Button>
          </Modal>
        </Portal>
      ) : (
        show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            is24Hour
            display="spinner"
            onD
            onChange={(event, selectedDate) => {
              if (
                event &&
                (event.type === 'dismissed' || event.type === 'set')
              ) {
                setShow(false);
              }
              const _ndate = format(new Date(selectedDate), 'dd.MM.yyyy');
              onChange(_ndate);
            }}
            style={{ backgroundColor: 'white' }}
          />
        )
      )}
      <HelperText type="error" style={_styles.helperText}>
        {touched[name] && errors[name] ? (
          <Text style={_styles.errorText}> {errors[name]}</Text>
        ) : (
          <Text style={_styles.errorText} />
        )}
      </HelperText>
    </View>
  );
};

PSDatePickerMobil.propTypes = exact({
  field: PropTypes.shape({
    name: PropTypes.string,
    onBlur: PropTypes.func,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.any,
    ]),
  }),
  label: PropTypes.node,
  maxDate: PropTypes.string,
  listData: PropTypes.array,
  onChange: PropTypes.func,
  form: PropTypes.shape({
    touched: PropTypes.objectOf(PropTypes.bool),
    errors: PropTypes.objectOf(PropTypes.string),
    setFieldTouched: PropTypes.func,
  }),
  children: PropTypes.node,
  placeholder: PropTypes.string,
});
PSDatePickerMobil.defaultProps = {
  form: {},
  field: {},
  listData: [],
  label: '',
  maxDate: '',
  onChange: () => {},
  placeholder: '',
  children: React.ReactNode,
};
