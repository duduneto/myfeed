// #region [setImports]
// ------------------------------

// import Packages
import React, { useEffect } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

// import Internal Components
import {
  UseLink,
  useStyle,
  useReducer,
  UseButtonSubmit,
  useChangeRd,
  UseTextInput,
  useFbAddData,
  addDataPending,
  addDataError,
  useForm,
  UsePicker,
  UseLoader,
  useChangeManyRd
} from './useMorfos';

const { stlColor1, stlBgColor1 } = useStyle;

// ------------------------------
// #endregion

export default function Sc00(compProps) {
  // #region [setLogic] hooks
  // ------------------------------

  // set hooks
  const {
    rdAuthUser,
    rdContent,
    rdMenuSelect,
    Sc12,
    addDataPending,
    addDataError
  } = useReducer();
  const screenContent = rdContent[5];
  const callChangeRd = useChangeRd();
  const callChangeManyRd = useChangeManyRd();
  const callFbAddData = useFbAddData();
  const estados = require('./cidades.json').estados;
  let listUfs = [];
  estados.map(estado => listUfs.push(estado.nome));

  useEffect(() => {
    return () => {
      callChangeManyRd({
        addDataPending: false,
        addDataError: false
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
  let stlTxtInput05 = stlTxtInput01;
  let stlTxtInput06 = stlTxtInput01;
  let stlTxtInput07 = stlTxtInput01;
  let stlTxtInput08 = stlTxtInput01;
  let stlTxtInput09 = stlTxtInput01;
  let stlTxtInput10 = stlTxtInput01;
  let stlPicker01 = {
    border: 'none',
    color: '#6f6f6f',
    fontSize: 14,
    backgroundColor: '#fff'
  };

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
        <ScrollView style={stlScroll01}>
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
            {addDataPending === true ? (
              <UseLoader />
            ) : addDataPending === false && addDataError === null ? (
              compProps.history.goBack()
            ) : (
              <>
                <INPUTS values={values} handleTextChange={handleTextChange} />
                <BUTTONS values={values} />
              </>
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
        />
        {/* Nome Fantasia */}
        <UseTextInput
          style={stlTxtInput02}
          placeholder={screenContent.txt02}
          inputName={'nomeFantasia'}
          setState={handleTextChange}
        />
        {/* CNPJ */}
        <UseTextInput
          style={stlTxtInput03}
          placeholder={screenContent.txt03}
          inputName={'CNPJ'}
          setState={handleTextChange}
        />
        {/* ESTADO */}
        {/* <UseTextInput
          style={stlTxtInput05}
          placeholder={screenContent.txt05}
          inputName={'estado'}
          setState={handleTextChange}
        /> */}
        <View style={stlTxtInput05}>
          <UsePicker
            style={[stlPicker01]}
            // boxViewStyle={{height: 100}}
            values={values}
            handleTextChange={handleTextChange}
            size={'6'}
            content={{
              name: 'estado',
              values: values.estado
                ? listUfs.sort(uf => (uf === values.estado ? -1 : 1))
                : ['Escolha o Estado', ...listUfs]
            }}
          />
        </View>
        {/* CIDADE */}
        <View style={stlTxtInput05}>
          <UsePicker
            style={stlPicker01}
            values={values}
            handleTextChange={handleTextChange}
            size={'6'}
            content={{
              name: 'cidade',
              values: values.cidade
                ? values.estado && values.estado !== 'Escolha o Estado'
                  ? estados
                      .find(estado => estado.nome === values.estado)
                      .cidades.sort(cidade =>
                        cidade === values.cidade ? -1 : 1
                      )
                  : ['Escolha uma Cidade']
                : values.estado && values.estado !== 'Escolha o Estado'
                ? estados.find(estado => estado.nome === values.estado).cidades
                : ['Escolha uma Cidade']
            }}
          />
        </View>
        {/* <UseTextInput
          style={stlTxtInput05}
          placeholder={'Cidade'}
          inputName={'cidade'}
          setState={handleTextChange}
        /> */}
        {/* ENDEREÇO */}
        <UseTextInput
          style={stlTxtInput04}
          placeholder={'Logradouro'}
          inputName={'rua'}
          setState={handleTextChange}
        />
        <UseTextInput
          style={stlTxtInput04}
          placeholder={'Bairro'}
          inputName={'bairro'}
          setState={handleTextChange}
        />
        {/* <UseTextInput
          style={stlTxtInput04}
          placeholder={'Número'}
          inputName={'num'}
          setState={handleTextChange}
        /> */}
        <UseTextInput
          style={stlTxtInput04}
          placeholder={'Complemento'}
          inputName={'complemento'}
          setState={handleTextChange}
        />
        {/* CEP */}
        <UseTextInput
          style={stlTxtInput06}
          placeholder={screenContent.txt06}
          inputName={'CEP'}
          setState={handleTextChange}
        />
        {/* CONTATO */}
        {/* <UseTextInput
          style={stlTxtInput07}
          placeholder={screenContent.txt07}
          inputName={'pessoaDeContato'}
          setState={handleTextChange}
        /> */}
        {/* CONTATO DA EMPRESA */}
        <UseTextInput
          style={stlTxtInput08}
          placeholder={screenContent.txt08}
          inputName={'foneDeContato'}
          setState={handleTextChange}
        />
        {/* EMAIL */}
        {/* <UseTextInput
          style={stlTxtInput09}
          placeholder={screenContent.txt09}
          inputName={'email'}
          setState={handleTextChange}
        /> */}
        {/* OBSERVAÇÕES */}
        <UseTextInput
          style={stlTxtInput10}
          placeholder={'Observações'}
          inputName={'observacoes'}
          multiline={true}
          numberOfLines={4}
          // defaultValue={'Aqui eu consigo colocar um texto'}
          setState={handleTextChange}
          state={values}
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

    const createArrayWithNomeDaEmpresa = name => {
      let resultArray = new Array();
      let arrayCompleteName = name.split(' ');
      for (let i = 1; i <= name.length; i++) {
        resultArray.push(name.slice(0, i).toUpperCase());
      }
      arrayCompleteName.map(nameItem => {
        for (let i = 1; i <= nameItem.length; i++) {
          resultArray.push(nameItem.slice(0, i).toUpperCase());
        }
      });
      return resultArray;
    };
    let infoAddPost = {
      collection: 'clients',
      reducerName: 'rdAddNewClient',
      dataToAdd: {
        createdAt: new Date(),
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
            let arrayNomeDaEmpresa = await createArrayWithNomeDaEmpresa(
              values.nomeDaEmpresa
            );
            let arrayNomeFantasia = await createArrayWithNomeDaEmpresa(
              values.nomeFantasia
            );
            infoAddPost.dataToAdd.arrayToSearch = arrayNomeDaEmpresa;
            infoAddPost.dataToAdd.arrayNomeFantasia = arrayNomeFantasia;
            callFbAddData(infoAddPost);
            // console.log(infoAddPost)
          }}
          requiredFields={[
            'nomeDaEmpresa',
            'nomeFantasia',
            'CNPJ',
            'rua',
            'bairro',
            'cidade',
            'CEP',
            'foneDeContato',
          ]}
          state={values}
          btnTextStyle={stlTxt02}
          btnText={'Salvar'}
        />
        <TouchableOpacity
          style={stlBtn02}
          onPress={() => {
            compProps.history.goBack();
          }}
        >
          <Text>Cancelar</Text>
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
