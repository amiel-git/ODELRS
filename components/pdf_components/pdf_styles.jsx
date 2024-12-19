import { StyleSheet, Font } from '@react-pdf/renderer';

// Register the font
Font.register({
    family: 'Times New Roman',
    fonts: [
      { src: '/fonts/Tinos-Regular.ttf' }, // Normal
      { src: '/fonts/Tinos-Bold.ttf', fontWeight: 'bold' }, // Bold
      { src: '/fonts/Tinos-Italic.ttf', fontStyle: 'italic' }, // Italic
      { src: '/fonts/Tinos-BoldItalic.ttf', fontWeight: 'bold', fontStyle: 'italic' }, // Bold Italic
    ],
  });
const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      padding: "50px 30px",
      fontFamily:'Times New Roman',
      paddingBottom:"60px"
    },
    header_section: {
      marginBottom: 10,
      padding: 10,
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      gap:"10px",
      marginBottom:"10px"
    },
    header_info_container:{
        display:"flex",
        flexDirection:"column",
        gap:"5px"
    },
    header_info:{
        fontSize:"12px"
    },
    header_info_bold:{
        fontSize:"12px",
        fontWeight: 'bold'
    },
    header_info_small:{
        fontSize:"7px"
    },
    header_info_bold_small:{
        fontSize:"10px",
        fontWeight: 'bold'
    },
    header_logo:{
        height:"60px",
        width:"60px"
    },
    title_container:{
        paddingLeft:"20px",
        display:"flex",
        flexDirection:"column",
        gap:"5px"
    },
    application_form_main_container: {
        padding:"20px",
        display:"flex",
        flexDirection:"column",
        border:"solid 2px gray",
        width:"100%",
        minHeight:"100px"
    },
    table: {
        display: 'table',
        width: 'auto',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#000',
      },
      tableRow: {
        flexDirection: 'row',
      },
      tableRowSpacer: {
        flexDirection: 'row',
        height:"30px"
      },
      tableRowSpacerSmall: {
        flexDirection: 'row',
        height:"10px"
      },
      tableCol100: {
        width: '100%', 
        borderStyle: 'solid',
        borderWidth: "0.5px",
        borderColor: '#000',
        padding: "5px",
      },
      tableCol70: {
        width: '70%', 
        borderStyle: 'solid',
        borderWidth: "0.5px",
        borderColor: '#000',
        padding: "5px",
      },
      tableCol33: {
        width: '33.333333%',
        borderStyle: 'solid',
        borderWidth: "0.5px",
        borderColor: '#000',
        padding:"5px",
      },
      tableCol30: {
        width: '30%', 
        borderStyle: 'solid',
        borderWidth: "0.5px",
        borderColor: '#000',
        padding: "5px",
      },
      tableCol25: {
        width: '25%', 
        borderStyle: 'solid',
        borderWidth: "0.5px",
        borderColor: '#000',
        padding: "5px",
      },
      tableCell: {
        display:"flex",
        flexDirection:"column",
        gap:"3px",
        width:"100%"
      },
      tableCellCentered: {
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignContent:"center",
        textAlign:"center",
        width:"100%"
      },
      field_label: {
        fontSize:"10px",
        fontWeight:"bold",
        width:"100%"
      },
      field_label_title: {
        fontSize:"10px",
        fontWeight:"bold",
        textAlign:"center",
        width:"100%"
      },
      title: {
        fontSize:"14px",
        fontWeight:"bold",
        textAlign:"center",
        width:"100%"
      },
      field_value: {
        fontSize:"10px",
      },
      field_value_centered: {
        fontSize:"12px",
        textAlign:"center"
      },
      tableCol100Borderless: {
        width: '100%', 
        padding: "5px",
      },
      tableCol60Borderless: {
        width: '60%', 
        padding: "5px",
      },
      tableCol50Borderless: {
        width: '50%', 
        padding: "5px",
      },
      tableCol40Borderless: {
        width: '40%', 
        padding: "5px",
      },

      footer:{
        width:"80%",
        height:"40px",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"end",
        paddingBottom:"20px",
        border:"solid 2px black",
        position:'absolute',
        bottom:"0",
        left:"30px"
      },
      separator:{
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        width: '100%',
        marginBottom:"20px"
      },
      separator_dash:{
        borderBottomStyle:"dashed",
        borderBottomWidth: 5,
        borderBottomColor: 'black',
        width: '100%',
        marginBottom:"5px"
      },
      lettter_text:{
        fontSize:"12px",
        textAlign:"justify"
      },
      lettter_text_margin:{
        fontSize:"12px",
        textAlign:"justify",
        marginLeft:"20px"
      },
  });


export default styles