// #region [setImports]
// ------------------------------

// import Packages
import React, { useEffect } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';

// import Internal Components
import {
  UseLink,
  useStyle,
  useReducer,
  UseButtonSubmit,
  useChangeRd,
  UseTextInput,
  useFbUpdateData,
  useForm,
  UseLoader,
  useChangeManyRd,
  UsePicker
} from './useMorfos';

const { stlColor1, stlBgColor1 } = useStyle;

// ------------------------------
// #endregion

export default function Sc00(compProps) {
  // #region [setLogic] hooks
  // ------------------------------

  // set hooks
  const {
    rdContent,
    Sc12c,
    yOffSetPosition,
    updateDataPending,
    updateDataError
  } = useReducer();
  const screenContent = rdContent[5];
  const callChangeRd = useChangeRd();
  const callFbUpdateData = useFbUpdateData();
  const callChangeManyRd = useChangeManyRd();

  const estados = require('./cidades.json').estados;

  let offSetYPosition;
  let _refScrollView;
  const keepYPosition = () => {
    callChangeRd({ reducerName: 'yOffSetPosition', value: offSetYPosition });
  };

  useEffect(() => {
    callChangeRd({
      reducerName: 'Cp01',
      value: 'Editar Cliente'
    });
    return () => {
      callChangeManyRd({
        updateDataError: null,
        updateDataPending: null,
        Sc12c: null
      });
    };
  }, []);
  // ------------------------------
  // #endregion

  // #region [allStyles]
  // ------------------------------

  // _STYLE
  // let stl = [useStyle.xxx,];
  let stlView01 = [useStyle.flexMaster];
  let stlScroll01 = [useStyle.scrollView];
  let stlView02 = [useStyle.longBar];
  let stlView03 = [useStyle.pad20];

  // FORM
  let stlView04 = [useStyle.card];
  let stlTxt01 = [useStyle.xx];
  let stlTxtInput01 = [useStyle.input, { marginBottom: 20 }];
  let stlTxtInput02 = stlTxtInput01;
  let stlTxtInput03 = stlTxtInput01;
  let stlTxtInput04 = stlTxtInput01;
  let stlTxtInput05 = [stlTxtInput01, { backgroundColor: '#fff' }];
  let stlTxtInput06 = stlTxtInput01;
  let stlTxtInput07 = stlTxtInput01;
  let stlTxtInput08 = stlTxtInput01;
  let stlTxtInput09 = stlTxtInput01;
  let stlTxtInput10 = stlTxtInput01;

  //BUTTONS
  let stlView05 = [useStyle.flexCenter];
  let stlTxt02 = [useStyle.txInverseColor];
  let stlBtn01 = [useStyle.btnPrimary, useStyle.btnLarge, { marginBottom: 10 }];
  let stlBtn02 = [useStyle.btn, useStyle.btnLarge];

  // ------------------------------
  // #endregion

  const _STYLE = props => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <View style={stlView01}>
        <View style={stlView02} />
        <ScrollView
          style={stlScroll01}
          ref={ref => (_refScrollView = ref)}
          onScroll={ref => (offSetYPosition = ref.nativeEvent.contentOffset.y)}
          onLayout={() => {
            if (yOffSetPosition) {
              _refScrollView.scrollTo({
                x: 0,
                y: yOffSetPosition,
                animated: false
              });
            }
          }}
        >
          <View style={stlView03}>
            {/*  */}

            {props.children}

            {/*  */}
          </View>
        </ScrollView>
      </View>

      // ------------------------------
      // #endregion
    );
  };

  const SCREEN = () => (
    // #region [component]
    // ------------------------------

    <_STYLE>
      <FORM
        renderProps={({ values, handleTextChange }) => (
          <>
            <INPUTS values={values} handleTextChange={handleTextChange} />
            {updateDataPending === true ? (
              <UseLoader />
            ) : updateDataPending === false && updateDataError === null ? (
              compProps.history.push('/activityProfile')
            ) : (
              <BUTTONS values={values} />
            )}
          </>
        )}
      />
    </_STYLE>

    // ------------------------------
    // #endregion
  );

  // set COMPONENTS
  //_______________________________

  const FORM = props => {
    // #region [setLogic]

    // ------------------------------

    // --- Use Form APP
    // ------------------------------
    // set Hook
    const { values, handleTextChange } = useForm();
    // ------------------------------

    // ------------------------------

    // #endregion
    return props.renderProps({ values, handleTextChange });
  };

  //_______________________________

  const INPUTS = props => {
    // #region [setLogic]
    // ------------------------------

    // Set Props
    let { values, handleTextChange } = props;
    if (!values.estado) {
      handleTextChange(Sc12c.estado, 'estado');
    }
    let listUfs = [];
    estados.map(estado => listUfs.push(estado.nome));
    values.estado
      ? listUfs.sort(estado => (estado === values.estado ? -1 : 1))
      : listUfs.sort(estado => (estado === Sc12c.estado ? -1 : 1));
    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------
      <View style={stlView04}>
        {/* Nome da Empresa */}
        <UseTextInput
          style={stlTxtInput01}
          placeholder={screenContent.txt01}
          inputName={'nomeDaEmpresa'}
          setState={handleTextChange}
          state={values}
          defaultValue={Sc12c.nomeDaEmpresa && Sc12c.nomeDaEmpresa}
        />
        {/* Nome Fantasia */}
        <UseTextInput
          style={stlTxtInput02}
          placeholder={screenContent.txt02}
          inputName={'nomeFantasia'}
          setState={handleTextChange}
          state={values}
          defaultValue={Sc12c.nomeFantasia && Sc12c.nomeFantasia}
        />
        {/* CNPJ */}
        <UseTextInput
          style={stlTxtInput03}
          placeholder={screenContent.txt03}
          inputName={'CNPJ'}
          setState={handleTextChange}
          state={values}
          defaultValue={Sc12c.CNPJ && Sc12c.CNPJ}
        />
        {/* ESTADO */}
        <UsePicker
          style={stlTxtInput05}
          size={'6'}
          values={values}
          handleTextChange={handleTextChange}
          content={{
            name: 'estado',
            values: listUfs
          }}
        />
        {/* <UseTextInput
          style={stlTxtInput05}
          placeholder={screenContent.txt05}
          inputName={'estado'}
          setState={handleTextChange}
          state={values}
          defaultValue={Sc12c.estado && Sc12c.estado}
        /> */}
        {/* CIDADE */}
        <UsePicker
          style={stlTxtInput05}
          size={'6'}
          values={values}
          handleTextChange={handleTextChange}
          content={{
            name: 'cidade',
            values: Sc12c
              ? values.estado
                ? estados
                    .find(estado => estado.nome === values.estado)
                    .cidades.sort(cidade => (cidade === values.cidade ? -1 : 1))
                : estados
                    .find(estado => estado.nome === Sc12c.estado)
                    .cidades.sort(cidade => (cidade === Sc12c.cidade ? -1 : 1))
              : []
          }}
        />
        {/* <UseTextInput
          style={stlTxtInput05}
          placeholder={screenContent.txt05}
          inputName={'cidade'}
          setState={handleTextChange}
          state={values}
          defaultValue={Sc12c.cidade && Sc12c.cidade}
        /> */}
        {/* ENDEREÇO */}
        <UseTextInput
          style={stlTxtInput04}
          placeholder={'Logradouro'}
          inputName={'rua'}
          setState={handleTextChange}
          state={values}
          defaultValue={Sc12c.rua && Sc12c.rua}
        />
        {/* <UseTextInput
          style={stlTxtInput04}
          placeholder={'Número'}
          inputName={'num'}
          setState={handleTextChange}
          state={values}
          defaultValue={Sc12c.num && Sc12c.num}
        /> */}
        <UseTextInput
          style={stlTxtInput04}
          placeholder={'Bairro'}
          inputName={'bairro'}
          setState={handleTextChange}
          state={values}
          defaultValue={Sc12c.bairro && Sc12c.bairro}
        />
        <UseTextInput
          style={stlTxtInput04}
          placeholder={'Complemento'}
          inputName={'complemento'}
          setState={handleTextChange}
          state={values}
          defaultValue={Sc12c.complemento && Sc12c.complemento}
        />
        {/* CEP */}
        <UseTextInput
          style={stlTxtInput06}
          placeholder={screenContent.txt06}
          inputName={'CEP'}
          setState={handleTextChange}
          state={values}
          defaultValue={Sc12c.CEP && Sc12c.CEP}
        />
        {/* CONTATO */}
        {/* <UseTextInput
          style={stlTxtInput07}
          placeholder={screenContent.txt07}
          inputName={'pessoaDeContato'}
          setState={handleTextChange}
          state={values}
          defaultValue={Sc12c.pessoaDeContato && Sc12c.pessoaDeContato}
        /> */}
        {/* CONTATO DA EMPRESA */}
        <UseTextInput
          style={stlTxtInput08}
          placeholder={screenContent.txt08}
          inputName={'foneDeContato'}
          setState={handleTextChange}
          state={values}
          defaultValue={Sc12c.foneDeContato && Sc12c.foneDeContato}
        />
        {/* EMAIL */}
        {/* <UseTextInput
          style={stlTxtInput09}
          placeholder={screenContent.txt09}
          inputName={'email'}
          setState={handleTextChange}
          state={values}
          defaultValue={Sc12c.email && Sc12c.email}
        /> */}
        {/* OBSERVAÇÕES */}
        <UseTextInput
          style={stlTxtInput10}
          placeholder={'Observações'}
          inputName={'observacoes'}
          multiline={true}
          numberOfLines={4}
          setState={handleTextChange}
          state={values}
          defaultValue={Sc12c.observacoes && Sc12c.observacoes}
        />
      </View>
      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const BUTTONS = props => {
    // #region [setLogic]
    // ------------------------------

    // Set Props
    let { values } = props;

    const createArrayWithNomeDaEmpresa = nome => {
      let resultArray = new Array();
      for (let i = 1; i <= nome.length; i++) {
        resultArray.push(nome.slice(0, i).toUpperCase());
      }
      return resultArray;
    };
    let infoAddPost = {
      collection: 'clients',
      reducerName: 'rdEditClient',
      offline: Sc12c.offline,
      docId: Sc12c.docId,
      dataToUpdate: {
        createdAt: Sc12c.createdAt,
        editedAt: new Date(),
        ...Sc12c,
        ...values
      }
    };
    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <View style={stlView05}>
        <UseButtonSubmit
          style={stlBtn01}
          disableBtnStyle={{ backgroundColor: '#c9c9c9' }}
          onPress={async () => {
            keepYPosition();
            let arrayNomeDaEmpresa = await createArrayWithNomeDaEmpresa(
              values.nomeDaEmpresa
            );
            infoAddPost.dataToUpdate.arrayToSearch = arrayNomeDaEmpresa;
            callChangeManyRd({
              Sc06: { ...infoAddPost.dataToUpdate, docId: Sc12c.docId }
            });
            callFbUpdateData(infoAddPost);
          }}
          anyFieldsToEnableSubmit={[
            'nomeDaEmpresa',
            'nomeFantasia',
            'CNPJ',
            'rua',
            'num',
            'bairro',
            'complemento',
            'cidade',
            'estado',
            'CEP',
            'pessoaDeContato',
            'foneDeContato',
            'email',
            'observacoes'
          ]}
          requiredFields={[
            'nomeDaEmpresa',
            'nomeFantasia',
            'CNPJ',
            'rua',
            'num',
            'bairro',
            'CEP',
            'complemento',
            'cidade',
            'estado',
            'pessoaDeContato',
            'foneDeContato',
            'email',
            'observacoes'
          ]}
          state={values}
          stateToCompare={Sc12c}
          btnTextStyle={stlTxt02}
          btnText={'Salvar'}
        />
        <TouchableOpacity
          style={stlBtn02}
          onPress={() => {
            callChangeManyRd({ Sc06: Sc12c });
            compProps.history.goBack();
          }}
        >
          <Text>{'Cancelar'}</Text>
        </TouchableOpacity>
      </View>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  // ---------------------- THE END
  return <SCREEN />;
}
