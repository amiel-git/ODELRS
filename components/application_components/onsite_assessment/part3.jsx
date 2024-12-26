"use client";


import { capitalize, convertArrayToString, generic_setter } from '@/app/lib/helper';
import styles from './component.module.css';
import { useState,useActionState, useEffect, useRef } from 'react';
import { 
            assignPersonnelInterviewed,
            realTimeFormFunction, 
            addPersonResposible,
            addPersonRecognized,
            addProficiencyTest,
            deletePersonResponsible,
            deletePersonRecognized,
            deleteProficiencyTest,
        } from '@/app/lib/application_actions';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import Image from 'next/image';
import ClearIcon from '@mui/icons-material/Clear';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Link from 'next/link';
import { Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';


const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });


export default function Part3(props){
    const user = props.user
    const application = props.application
    const lab = props.lab
    const team = application.onsite_assessment.assessmentTeam
    const part = props.part
    const checklists = props.checklists


    const [showModal, setShowModal] = useState(false)
    const [showModalRecognized, setShowModalRecognized] = useState(false)
    const [showModalProficiency, setShowModalProficiency] = useState(false)
    
    
    //Form ref
    const personnelFormRef = useRef()

    

    const personnels = lab?.personnels ?? []
    const applicationFiles = props.applicationFiles
    const accreditationRecords = props.accreditationRecords

    const track_records = props.trackRecords
    const [checklist_data, set_checklist_data] = useState(checklists[part]?.data ?? {})
    
    const [selectedPersonnel, setSelectedPersonnel] = useState(checklists[part]?.personnelInterviewedId ?? "")
    const [personnelFormState, personnelFormAction] = useActionState(assignPersonnelInterviewed, {error:null})

    const [snackBarMessage, setSnackBarMessage] = useState("")
    const [openSnackBar, setOpenSnackBar] = useState(false)
    const [snackBarSeverity, setSnackBarSeverity] = useState("success")

    const [realtimeFormState, realtimeFormAction] = useActionState(realTimeFormFunction, {error:null})

    const [personFormState, personFormAction] = useActionState(addPersonResposible, {error:null})
    const [recognizedFormState, recognizedFormAction] = useActionState(addPersonRecognized, {error:null})
    const [proficiencyFormState, proficiencyFormAction] = useActionState(addProficiencyTest, {error:null})

    const [selected_sample, set_selected_sample] = useState("")
    const [selected_sample_json, set_selected_sample_json] = useState({}) 




    const [deletePersonsResponsibleFormState, deletePersonsResponsibleFormAction] = useActionState(deletePersonResponsible, {error:null})
    const [deletePersonsRecognizedFormState, deletePersonsRecognizedFormAction] = useActionState(deletePersonRecognized, {error:null})
    const [deleteProficiencyFormState, deleteProficiencyFormAction] = useActionState(deleteProficiencyTest, {error:null})

    const [fileName, setFileName] = useState("")
    const [file, setFile] = useState("")

    const [isEditor, setIsEditor] = useState(false)
    useEffect(() => {
            const assignees__ = checklists[part]?.assignees
    
            if(assignees__ !== null && assignees__ !== undefined){
                for(var assignee of assignees__){
                    if(assignee.id === user.id && application.status === 8){
                        setIsEditor(true)
                    }
                }
            }
        },[])
    
    
        useEffect(() => {
            if(isEditor){
                console.log("YOU ARE AN EDITOR")
            }
        },[isEditor])


    const realtimeForm1 = useRef()
    const realtimeForm2 = useRef()
    const realtimeForm3 = useRef()
    const realtimeForm4 = useRef()
    const realtimeForm5 = useRef()
    const realtimeForm6 = useRef()
    const realtimeForm7 = useRef()
    const realtimeForm8 = useRef()
    const realtimeForm9 = useRef()
    const realtimeForm10 = useRef()
    const realtimeForm11 = useRef()
    const realtimeForm12 = useRef()
    const realtimeForm13 = useRef()
    const realtimeForm14 = useRef()
    const realtimeForm15 = useRef()
    const realtimeForm16 = useRef()
    const realtimeForm17 = useRef()
    const realtimeForm18 = useRef()
    const realtimeForm19 = useRef()
    const realtimeForm20 = useRef()
    const realtimeForm21 = useRef()
    const realtimeForm22 = useRef()
    const realtimeForm23 = useRef();
    const realtimeForm24 = useRef();
    const realtimeForm25 = useRef();
    const realtimeForm26 = useRef();
    const realtimeForm27 = useRef();
    const realtimeForm28 = useRef();
    const realtimeForm29 = useRef();
    const realtimeForm30 = useRef();
    
    const realtimeForm31 = useRef();
    const realtimeForm32 = useRef();
    const realtimeForm33 = useRef();
    const realtimeForm34 = useRef();
    const realtimeForm35 = useRef();
    const realtimeForm36 = useRef();
    const realtimeForm37 = useRef();
    const realtimeForm38 = useRef();
    const realtimeForm39 = useRef();
    const realtimeForm40 = useRef();
    
    const realtimeForm41 = useRef();
    const realtimeForm42 = useRef();
    const realtimeForm43 = useRef();
    const realtimeForm44 = useRef();
    const realtimeForm45 = useRef();
    const realtimeForm46 = useRef();
    const realtimeForm47 = useRef();
    const realtimeForm48 = useRef();
    const realtimeForm49 = useRef();
    const realtimeForm50 = useRef();
    
    const realtimeForm51 = useRef();
    const realtimeForm52 = useRef();
    const realtimeForm53 = useRef();
    const realtimeForm54 = useRef();
    const realtimeForm55 = useRef();
    const realtimeForm56 = useRef();
    const realtimeForm57 = useRef();
    const realtimeForm58 = useRef();
    const realtimeForm59 = useRef();
    const realtimeForm60 = useRef();
    
    const realtimeForm61 = useRef();
    const realtimeForm62 = useRef();
    const realtimeForm63 = useRef();
    const realtimeForm64 = useRef();
    const realtimeForm65 = useRef();
    const realtimeForm66 = useRef();
    const realtimeForm67 = useRef();
    const realtimeForm68 = useRef();
    const realtimeForm69 = useRef();
    const realtimeForm70 = useRef();
    
    const realtimeForm71 = useRef();
    const realtimeForm72 = useRef();
    const realtimeForm73 = useRef();
    const realtimeForm74 = useRef();
    const realtimeForm75 = useRef();
    const realtimeForm76 = useRef();
    const realtimeForm77 = useRef();
    const realtimeForm78 = useRef();
    const realtimeForm79 = useRef();
    const realtimeForm80 = useRef();
    
    const realtimeForm81 = useRef();
    const realtimeForm82 = useRef();
    const realtimeForm83 = useRef();
    const realtimeForm84 = useRef();
    const realtimeForm85 = useRef();
    const realtimeForm86 = useRef();
    const realtimeForm87 = useRef();
    const realtimeForm88 = useRef();
    const realtimeForm89 = useRef();
    const realtimeForm90 = useRef();
    
    const realtimeForm91 = useRef();
    const realtimeForm92 = useRef();
    const realtimeForm93 = useRef();
    const realtimeForm94 = useRef();
    const realtimeForm95 = useRef();
    const realtimeForm96 = useRef();
    const realtimeForm97 = useRef();
    const realtimeForm98 = useRef();
    const realtimeForm99 = useRef();
    const realtimeForm100 = useRef();
    
    const realtimeForm101 = useRef();
    const realtimeForm102 = useRef();
    const realtimeForm103 = useRef();
    const realtimeForm104 = useRef();
    const realtimeForm105 = useRef();
    const realtimeForm106 = useRef();
    const realtimeForm107 = useRef();
    const realtimeForm108 = useRef();
    const realtimeForm109 = useRef();
    const realtimeForm110 = useRef();
    
    const realtimeForm111 = useRef();
    const realtimeForm112 = useRef();
    const realtimeForm113 = useRef();
    const realtimeForm114 = useRef();
    const realtimeForm115 = useRef();
    const realtimeForm116 = useRef();
    const realtimeForm117 = useRef();
    const realtimeForm118 = useRef();
    const realtimeForm119 = useRef();
    const realtimeForm120 = useRef();
    
    const realtimeForm121 = useRef();
    const realtimeForm122 = useRef();
    const realtimeForm123 = useRef();
    const realtimeForm124 = useRef();
    const realtimeForm125 = useRef();
    const realtimeForm126 = useRef();
    const realtimeForm127 = useRef();
    const realtimeForm128 = useRef();
    const realtimeForm129 = useRef();
    const realtimeForm130 = useRef();
    
    const realtimeForm131 = useRef();
    const realtimeForm132 = useRef();
    const realtimeForm133 = useRef();
    const realtimeForm134 = useRef();
    const realtimeForm135 = useRef();
    const realtimeForm136 = useRef();
    const realtimeForm137 = useRef();
    const realtimeForm138 = useRef();
    const realtimeForm139 = useRef();
    const realtimeForm140 = useRef();
    
    const realtimeForm141 = useRef();
    const realtimeForm142 = useRef();
    const realtimeForm143 = useRef();
    const realtimeForm144 = useRef();
    const realtimeForm145 = useRef();
    const realtimeForm146 = useRef();
    const realtimeForm147 = useRef();
    const realtimeForm148 = useRef();
    const realtimeForm149 = useRef();
    const realtimeForm150 = useRef();
    
    const realtimeForm151 = useRef();
    const realtimeForm152 = useRef();
    const realtimeForm153 = useRef();
    const realtimeForm154 = useRef();
    const realtimeForm155 = useRef();
    const realtimeForm156 = useRef();
    const realtimeForm157 = useRef();
    const realtimeForm158 = useRef();
    const realtimeForm159 = useRef();
    const realtimeForm160 = useRef();
    
    const realtimeForm161 = useRef();
    const realtimeForm162 = useRef();
    const realtimeForm163 = useRef();
    const realtimeForm164 = useRef();
    const realtimeForm165 = useRef();
    const realtimeForm166 = useRef();
    const realtimeForm167 = useRef();
    const realtimeForm168 = useRef();
    const realtimeForm169 = useRef();
    const realtimeForm170 = useRef();
    const realtimeForm171 = useRef();
    const realtimeForm172 = useRef();
    const realtimeForm173 = useRef();
    const realtimeForm174 = useRef();
    const realtimeForm175 = useRef();

    


    const [persons_responsible, set_persons_responsible] = useState(checklist_data?.persons_responsible ?? [])
    const [item1, set_item1] = useState(checklist_data?.item1 ?? "");
    const [item2, set_item2] = useState(checklist_data?.item2 ?? "");
    const [item3, set_item3] = useState(checklist_data?.item3 ?? "");
    const [item4, set_item4] = useState(checklist_data?.item4 ?? "");
    const [item5, set_item5] = useState(checklist_data?.item5 ?? "");
    const [item6, set_item6] = useState(checklist_data?.item6 ?? "");
    const [item7, set_item7] = useState(checklist_data?.item7 ?? "");
    const [item8, set_item8] = useState(checklist_data?.item8 ?? "");
    const [item9, set_item9] = useState(checklist_data?.item9 ?? "");
    const [item10, set_item10] = useState(checklist_data?.item10 ?? "");
    const [item11, set_item11] = useState(checklist_data?.item11 ?? "");
    const [item12, set_item12] = useState(checklist_data?.item12 ?? "");
    const [item13, set_item13] = useState(checklist_data?.item13 ?? "");
    const [item14, set_item14] = useState(checklist_data?.item14 ?? "");
    const [item15, set_item15] = useState(checklist_data?.item15 ?? "");
    const [item16, set_item16] = useState(checklist_data?.item16 ?? "");
    const [item17, set_item17] = useState(checklist_data?.item17 ?? "");
    const [item18, set_item18] = useState(checklist_data?.item18 ?? "");
    const [item19, set_item19] = useState(checklist_data?.item19 ?? "");
    const [item20, set_item20] = useState(checklist_data?.item20 ?? "");
    const [item21, set_item21] = useState(checklist_data?.item21 ?? "");
    const [item22, set_item22] = useState(checklist_data?.item22 ?? "");
    const [item23, set_item23] = useState(checklist_data?.item23 ?? "");
    const [item24, set_item24] = useState(checklist_data?.item24 ?? "");
    const [item25, set_item25] = useState(checklist_data?.item25 ?? "");
    const [item26, set_item26] = useState(checklist_data?.item26 ?? "");
    const [item27, set_item27] = useState(checklist_data?.item27 ?? "");
    const [item28, set_item28] = useState(checklist_data?.item28 ?? "");
    const [item29, set_item29] = useState(checklist_data?.item29 ?? "");
    const [item30, set_item30] = useState(checklist_data?.item30 ??(""));
    const [item31, set_item31] = useState(checklist_data?.item31 ?? "");
    const [item32, set_item32] = useState(checklist_data?.item32 ?? "");
    const [item33, set_item33] = useState(checklist_data?.item33 ?? "");
    const [item34, set_item34] = useState(checklist_data?.item34 ?? "");
    const [item35, set_item35] = useState(checklist_data?.item35 ?? "");
    const [item36, set_item36] = useState(checklist_data?.item36 ??(""));
    const [item37, set_item37] = useState(checklist_data?.item37 ?? "");
    const [item38, set_item38] = useState(checklist_data?.item38 ?? "");
    const [item39, set_item39] = useState(checklist_data?.item39 ??(""));
    const [item40, set_item40] = useState(checklist_data?.item40 ?? "");
    const [item41, set_item41] = useState(checklist_data?.item41 ?? "");
    const [item42, set_item42] = useState(checklist_data?.item42 ?? "");
    const [item43, set_item43] = useState(checklist_data?.item43 ??(""));
    const [item44, set_item44] = useState(checklist_data?.item44 ?? "");
    const [item45, set_item45] = useState(checklist_data?.item45 ?? "");
    const [item46, set_item46] = useState(checklist_data?.item46 ??(""));
    const [item47, set_item47] = useState(checklist_data?.item47 ?? "");
    const [item48, set_item48] = useState(checklist_data?.item48 ??(""));
    const [item49, set_item49] = useState(checklist_data?.item49 ?? "");
    const [item50, set_item50] = useState(checklist_data?.item50 ??(""));
    const [item51, set_item51] = useState(checklist_data?.item51 ?? "");
    const [item52, set_item52] = useState(checklist_data?.item52 ?? "");
    const [item53, set_item53] = useState(checklist_data?.item53 ?? "");
    const [item54, set_item54] = useState(checklist_data?.item54 ??(""));
    const [item55, set_item55] = useState(checklist_data?.item55 ?? "");
    const [item56, set_item56] = useState(checklist_data?.item56 ?? "");
    const [item57, set_item57] = useState(checklist_data?.item57 ??(""));
    const [item58, set_item58] = useState(checklist_data?.item58 ?? "");
    const [item59, set_item59] = useState(checklist_data?.item59 ?? "");
    const [item60, set_item60] = useState(checklist_data?.item60 ??(""));
    const [item61, set_item61] = useState(checklist_data?.item61 ?? "");
    const [item62, set_item62] = useState(checklist_data?.item62 ?? "");
    const [item63, set_item63] = useState(checklist_data?.item63 ??(""));
    const [item64, set_item64] = useState(checklist_data?.item64 ?? "");
    const [item65, set_item65] = useState(checklist_data?.item65 ??(""));
    const [item66, set_item66] = useState(checklist_data?.item66 ?? "");
    const [item67, set_item67] = useState(checklist_data?.item67 ?? "");
    const [item68, set_item68] = useState(checklist_data?.item68 ??(""));
    const [item69, set_item69] = useState(checklist_data?.item69 ??(""));
    const [item70, set_item70] = useState(checklist_data?.item70 ??(""));
    const [item71, set_item71] = useState(checklist_data?.item71 ??(""));
    const [item72, set_item72] = useState(checklist_data?.item72 ??(""));
    const [item73, set_item73] = useState(checklist_data?.item73 ??(""));
    const [item74, set_item74] = useState(checklist_data?.item74 ??(""));
    const [item75, set_item75] = useState(checklist_data?.item75 ??(""));
    const [item76, set_item76] = useState(checklist_data?.item76 ??(""));
    const [item77, set_item77] = useState(checklist_data?.item77 ??(""));
    const [item78, set_item78] = useState(checklist_data?.item78 ??(""));
    const [item79, set_item79] = useState(checklist_data?.item79 ??(""));
    const [item80, set_item80] = useState(checklist_data?.item80 ??(""));
    const [item81, set_item81] = useState(checklist_data?.item81 ??(""));
    const [item82, set_item82] = useState(checklist_data?.item82 ??(""));
    const [item83, set_item83] = useState(checklist_data?.item83 ??(""));
    const [item84, set_item84] = useState(checklist_data?.item84 ??(""));
    const [item85, set_item85] = useState(checklist_data?.item85 ??(""));
    const [item86, set_item86] = useState(checklist_data?.item86 ??(""));
    const [item87, set_item87] = useState(checklist_data?.item87 ??(""));
    const [item88, set_item88] = useState(checklist_data?.item88 ??(""));
    const [item89, set_item89] = useState(checklist_data?.item89 ??(""));
    const [item90, set_item90] = useState(checklist_data?.item90 ??(""));
    const [item91, set_item91] = useState(checklist_data?.item91 ??(""));
    const [item92, set_item92] = useState(checklist_data?.item92 ??(""));
    const [item93, set_item93] = useState(checklist_data?.item93 ??(""));
    const [item94, set_item94] = useState(checklist_data?.item94 ??(""));
    const [item95, set_item95] = useState(checklist_data?.item95 ??(""));
    const [item96, set_item96] = useState(checklist_data?.item96 ??(""));
    const [item97, set_item97] = useState(checklist_data?.item97 ??(""));
    const [item98, set_item98] = useState(checklist_data?.item98 ??(""));
    const [item99, set_item99] = useState(checklist_data?.item99 ??(""));
    const [item100, set_item100] = useState(checklist_data?.item100 ??(""));
    const [item101, set_item101] = useState(checklist_data?.item101 ??(""));
    const [item102, set_item102] = useState(checklist_data?.item102 ??(""));
    const [item103, set_item103] = useState(checklist_data?.item103 ??(""));
    const [item104, set_item104] = useState(checklist_data?.item104 ??(""));
    const [item105, set_item105] = useState(checklist_data?.item105 ??(""));
    const [item106, set_item106] = useState(checklist_data?.item106 ??(""));
    const [item107, set_item107] = useState(checklist_data?.item107 ??(""));
    const [item108, set_item108] = useState(checklist_data?.item108 ??(""));
    const [item109, set_item109] = useState(checklist_data?.item109 ??(""));
    const [item110, set_item110] = useState(checklist_data?.item110 ??(""));
    const [item111, set_item111] = useState(checklist_data?.item111 ??(""));
    const [item112, set_item112] = useState(checklist_data?.item112 ??(""));
    const [item113, set_item113] = useState(checklist_data?.item113 ??(""));
    const [item114, set_item114] = useState(checklist_data?.item114 ??(""));
    const [item115, set_item115] = useState(checklist_data?.item115 ??(""));
    const [item116, set_item116] = useState(checklist_data?.item116 ??(""));
    const [item117, set_item117] = useState(checklist_data?.item117 ??(""));
    const [item118, set_item118] = useState(checklist_data?.item118 ??(""));
    const [item119, set_item119] = useState(checklist_data?.item119 ??(""));
    const [item120, set_item120] = useState(checklist_data?.item120 ??(""));
    const [item121, set_item121] = useState(checklist_data?.item121 ??(""));
    const [item122, set_item122] = useState(checklist_data?.item122 ??(""));
    const [item123, set_item123] = useState(checklist_data?.item123 ??(""));
    const [item124, set_item124] = useState(checklist_data?.item124 ??(""));
    const [item125, set_item125] = useState(checklist_data?.item125 ??(""));
    const [item126, set_item126] = useState(checklist_data?.item126 ??(""));
    const [item127, set_item127] = useState(checklist_data?.item127 ??(""));
    const [item128, set_item128] = useState(checklist_data?.item128 ??(""));
    const [item129, set_item129] = useState(checklist_data?.item129 ??(""));
    const [item130, set_item130] = useState(checklist_data?.item130 ??(""));
    const [item131, set_item131] = useState(checklist_data?.item131 ??(""));
    const [item132, set_item132] = useState(checklist_data?.item132 ??(""));
    const [item133, set_item133] = useState(checklist_data?.item133 ??(""));
    const [item134, set_item134] = useState(checklist_data?.item134 ??(""));
    const [item135, set_item135] = useState(checklist_data?.item135 ??(""));
    const [item136, set_item136] = useState(checklist_data?.item136 ??(""));
    const [item137, set_item137] = useState(checklist_data?.item137 ??(""));
    const [item138, set_item138] = useState(checklist_data?.item138 ??(""));
    const [item139, set_item139] = useState(checklist_data?.item139 ??(""));
    const [item140, set_item140] = useState(checklist_data?.item140 ??(""));
    const [item141, set_item141] = useState(checklist_data?.item141 ??(""));
    const [item142, set_item142] = useState(checklist_data?.item142 ??(""));
    const [item143, set_item143] = useState(checklist_data?.item143 ??(""));
    const [item144, set_item144] = useState(checklist_data?.item144 ??(""));
    const [item145, set_item145] = useState(checklist_data?.item145 ??(""));
    const [item146, set_item146] = useState(checklist_data?.item146 ??(""));
    const [item147, set_item147] = useState(checklist_data?.item147 ??(""));
    const [item148, set_item148] = useState(checklist_data?.item148 ??(""));
    const [item149, set_item149] = useState(checklist_data?.item149 ??(""));
    const [item150, set_item150] = useState(checklist_data?.item150 ??(""));
    const [item151, set_item151] = useState(checklist_data?.item151 ??(""));
    const [item152, set_item152] = useState(checklist_data?.item152 ??(""));
    const [item153, set_item153] = useState(checklist_data?.item153 ??(""));
    const [item154, set_item154] = useState(checklist_data?.item154 ??(""));
    const [item155, set_item155] = useState(checklist_data?.item155 ??(""));
    const [item156, set_item156] = useState(checklist_data?.item156 ??(""));
    const [item157, set_item157] = useState(checklist_data?.item157 ??(""));
    const [item158, set_item158] = useState(checklist_data?.item158 ??(""));
    const [item159, set_item159] = useState(checklist_data?.item159 ??(""));
    const [item160, set_item160] = useState(checklist_data?.item160 ??(""));
    const [item161, set_item161] = useState(checklist_data?.item161 ??(""));
    const [item162, set_item162] = useState(checklist_data?.item162 ??(""));
    const [item163, set_item163] = useState(checklist_data?.item163 ??(""));
    const [item164, set_item164] = useState(checklist_data?.item164 ??(""));
    const [item165, set_item165] = useState(checklist_data?.item165 ??(""));
    const [item166, set_item166] = useState(checklist_data?.item166 ??(""));
    const [item167, set_item167] = useState(checklist_data?.item167 ??(""));
    const [item168, set_item168] = useState(checklist_data?.item168 ??(""));
    const [item169, set_item169] = useState(checklist_data?.item169 ?? "");
    const [item170, set_item170] = useState(checklist_data?.item170 ?? "");
    const [item171, set_item171] = useState(checklist_data?.item171 ?? "");
    const [item172, set_item172] = useState(checklist_data?.item172 ?? "");
    const [item173, set_item173] = useState(checklist_data?.item173 ?? "");
    const [item174, set_item174] = useState(checklist_data?.item174 ?? "");
    const [item175, set_item175] = useState(checklist_data?.item175 ?? "");


    



    const handleRealTimeSubmit = (formRef) => {
        setTimeout(() =>{
            formRef.current.requestSubmit()
        },[200])
    }


    useEffect(() => {
        try {
            set_selected_sample_json(JSON.parse(selected_sample))
        } catch (error) {
            set_selected_sample_json({
                sampleType:"",
                parameter:"",
                sampleMethod:"",
                sampleReference:""
            })
        }
    },[selected_sample])




    function toggle_modal(result={}) {
        setShowModal(!showModal)
        set_selected_sample("")
        setFileName("")
        setFile("")
        if(Object.keys(result).includes("done")){
            if(result.error === null){
                setSnackBarMessage("Successfully added a record.")
                setOpenSnackBar(true)
                setSnackBarSeverity("success")
            } else {
                setSnackBarMessage("Unable to add a record.!")
                setOpenSnackBar(true)
                setSnackBarSeverity("error")
            }
        }
    }

    function toggle_modal_recognized(result={}) {
        setShowModalRecognized(!showModalRecognized)
        setFileName("")
        setFile("")
        if(Object.keys(result).includes("done")){
            if(result.error === null){
                setSnackBarMessage("Successfully added a record.")
                setOpenSnackBar(true)
                setSnackBarSeverity("success")
            } else {
                setSnackBarMessage("Unable to add a record.!")
                setOpenSnackBar(true)
                setSnackBarSeverity("error")
            }
        }
    }

    function toggle_modal_proficiency(result={}) {
        setShowModalProficiency(!showModalProficiency)
        if(Object.keys(result).includes("done")){
            if(result.error === null){
                setSnackBarMessage("Successfully added a record.")
                setOpenSnackBar(true)
                setSnackBarSeverity("success")
            } else {
                setSnackBarMessage("Unable to add a record.!")
                setOpenSnackBar(true)
                setSnackBarSeverity("error")
            }
        }
    }

    const fileUpload = (file_setter,filename_setter) => (event) => {
        const file__ = event.target.files[0]
        file_setter(file__)
        filename_setter(file__.name)
    }


    useEffect(() => {
        if(Object.keys(deletePersonsResponsibleFormState).includes("success")){
            if(deletePersonsResponsibleFormState.error === null){
                setSnackBarMessage(`Successfully deleted record.`)
                setOpenSnackBar(true)
                setSnackBarSeverity("success")
                set_checklist_data(deletePersonsResponsibleFormState.data)
            } else {
                setSnackBarMessage("Unable to delete record.")
                setOpenSnackBar(true)
                setSnackBarSeverity("error")
            }
        }
      },[deletePersonsResponsibleFormState])


    useEffect(() => {
        if(Object.keys(deletePersonsRecognizedFormState).includes("success")){
            if(deletePersonsRecognizedFormState.error === null){
                setSnackBarMessage(`Successfully deleted record.`)
                setOpenSnackBar(true)
                setSnackBarSeverity("success")
                set_checklist_data(deletePersonsRecognizedFormState.data)
            } else {
                setSnackBarMessage("Unable to delete record.")
                setOpenSnackBar(true)
                setSnackBarSeverity("error")
            }
        }
      },[deletePersonsRecognizedFormState])

    useEffect(() => {
        if(Object.keys(deleteProficiencyFormState).includes("success")){
            if(deleteProficiencyFormState.error === null){
                setSnackBarMessage(`Successfully deleted record.`)
                setOpenSnackBar(true)
                setSnackBarSeverity("success")
                set_checklist_data(deleteProficiencyFormState.data)
            } else {
                setSnackBarMessage("Unable to delete record.")
                setOpenSnackBar(true)
                setSnackBarSeverity("error")
            }
        }
      },[deleteProficiencyFormState])


    useEffect(() => {
        
        if(Object.keys(personFormState).includes("success")){
            toggle_modal()
            if(personFormState.error === null){
                setSnackBarMessage(`Successfully added a new person record.`)
                setOpenSnackBar(true)
                setSnackBarSeverity("success")
                set_checklist_data(personFormState.data)
            } else {
                setSnackBarMessage("Unable to add new person record.")
                setOpenSnackBar(true)
                setSnackBarSeverity("error")
            }
        }
      },[personFormState])



    useEffect(() => {
        if(Object.keys(proficiencyFormState).includes("success")){
            toggle_modal_proficiency()
            if(proficiencyFormState.error === null){
                setSnackBarMessage(`Successfully added a new proficiency record.`)
                setOpenSnackBar(true)
                setSnackBarSeverity("success")
                set_checklist_data(proficiencyFormState.data)
            } else {
                setSnackBarMessage("Unable to add new proficiency record.")
                setOpenSnackBar(true)
                setSnackBarSeverity("error")
            }
        }
      },[proficiencyFormState])


    useEffect(() => {
        if(Object.keys(recognizedFormState).includes("success")){
            toggle_modal_recognized()
            if(recognizedFormState.error === null){
                setSnackBarMessage(`Successfully added a new person record.`)
                setOpenSnackBar(true)
                setSnackBarSeverity("success")
                set_checklist_data(recognizedFormState.data)
            } else {
                setSnackBarMessage("Unable to add new person record.")
                setOpenSnackBar(true)
                setSnackBarSeverity("error")
            }
        }
      },[recognizedFormState])

    useEffect(() => {
        if(Object.keys(realtimeFormState).includes("data")){
            set_checklist_data(realtimeFormState.data)
        }
        
    },[realtimeFormState])



    // INPUT VARIABLES





    const onChangeInterviewedPersonnel = (event) => {
        setSelectedPersonnel(event.target.value)
        setTimeout(() =>{
            personnelFormRef.current.requestSubmit()
        },[100])
    }

    useEffect(() => {
        if(Object.keys(personnelFormState).includes("success")){
            if(personnelFormState.error === null){
                setSnackBarMessage(`Successfully updated personnel interviewed.`)
                setOpenSnackBar(true)
                setSnackBarSeverity("success")
            } else {
                setSnackBarMessage("Unable to update onsite assessment.")
                setOpenSnackBar(true)
                setSnackBarSeverity("error")
            }
        }
      },[personnelFormState])


    const handleCloseSnackBar = (event, reason) => {
            if (reason === 'clickaway') {
            return;
            }
            setOpenSnackBar(false);
    };


    return (
        <div className={styles.main_container}>
            <div className={styles.form_section}>
                <p className={styles.section_header}>Assessor</p>
                <div className={styles.details_container_row}>
                    <div className={styles.item_container}>
                        <p className={styles.sub_header}>Name:</p>
                        <p className={styles.sub_header_value}>
                            {`${capitalize(team.external_assessor_pl?.userDetails?.firstName ?? "")} ${capitalize(team.external_assessor_pl?.userDetails?.lastName ?? "")}`}
                        </p>
                    </div>
                    <div className={styles.item_container}>
                        <p className={styles.sub_header}>Email:</p>
                        <p className={styles.sub_header_value}>{team?.external_assessor_pl?.email}</p>
                    </div>
                </div>
            </div>

            <hr />

            <div className={styles.form_section}>
                <p className={styles.section_header}>Personnel Interviewed</p>
                <div className={styles.details_container_row}>
                    <form action={personnelFormAction} ref={personnelFormRef}>
                        <div className={styles.item_container}>
                            <p className={styles.sub_header}>Personnel:</p>
                            <select disabled={!isEditor} name="personnel" value={selectedPersonnel} onChange={onChangeInterviewedPersonnel} className={styles.input}>
                                <option value={""}>---</option>
                                {personnels.map((item, idx) => {
                                    return(
                                        <option key={idx} value={item.id}>{item.name}</option>
                                    )
                                })}
                            </select>
                            <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                            <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                        </div>
                    </form> 
                </div>
            </div>
            
            <hr className={styles.separator}/>


            <div className={styles.form_section}>
                <div className={styles.details_container_row_borderless}>
                    <p className={styles.section_header}>Quality control</p>
                </div>
            </div>

            <table className={styles.information_table}>
                <tbody>
                    <tr className={styles.fillout_table_header}>
                        <td className={styles.fillout_table_cell_header}>Item</td>
                        <td className={styles.fillout_table_cell_header_yesno}>Yes/No</td>
                        <td className={styles.fillout_table_cell_header}>Comment</td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`The laboratory shall prepare and adopt a quality assurance program to enhance the quality of data generated by the laboratory.`}</p>
                            <p></p>
                            <p>{`Note: Secure a copy of laboratory quality manual and/ or procedures to verify compliance to their documented QA program. Any non-compliance to the Lab’s QA program is considered as non-compliance.`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm2} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item1} onChange={(event) => {
                                        set_item1(event.target.value)
                                        handleRealTimeSubmit(realtimeForm2)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item1"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form> 
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm3} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text"  name="form_value" className={styles.textarea} value={item2} onChange={generic_setter(set_item2)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm3)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item2"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form> 
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Documented Quality Assurance programme i.e.`}</p>
                            <p></p>
                            <p>{`Data verification practices including interlaboratory comparison and proficiency testing programs`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm4} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item3} onChange={(event) => {
                                        set_item3(event.target.value)
                                        handleRealTimeSubmit(realtimeForm4)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item3"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form> 
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm5} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text"  name="form_value" className={styles.textarea} value={item4} onChange={generic_setter(set_item2)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm5)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item4"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form> 
                        </td>
                    </tr>


                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`data verification, validation and reporting`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm6} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item5} onChange={(event) => {
                                        set_item5(event.target.value)
                                        handleRealTimeSubmit(realtimeForm6)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item5"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm7} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item6} onChange={generic_setter(set_item6)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm7)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item6"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.information_table_row_header}>
                            <p style={{width:"100%", textAlign:"center", fontSize:"15px"}}>Test Report Information</p>
                        </td>
                    </tr>
                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`unique test report ID`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm8} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item7} onChange={(event) => {
                                        set_item7(event.target.value)
                                        handleRealTimeSubmit(realtimeForm8)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item7"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm9} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item8} onChange={generic_setter(set_item8)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm9)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item8"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Name/ address of laboratory`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm10} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item9} onChange={(event) => {
                                        set_item9(event.target.value)
                                        handleRealTimeSubmit(realtimeForm10)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item9"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm11} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item10} onChange={generic_setter(set_item10)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm11)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item10"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Name/ address of client`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm12} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item11} onChange={(event) => {
                                        set_item11(event.target.value)
                                        handleRealTimeSubmit(realtimeForm12)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item11"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm13} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item12} onChange={generic_setter(set_item12)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm13)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item12"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Unique sample ID`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm14} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item13} onChange={(event) => {
                                        set_item13(event.target.value)
                                        handleRealTimeSubmit(realtimeForm14)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item13"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm15} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item14} onChange={generic_setter(set_item14)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm15)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item14"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>


                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Type of sample`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm16} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item15} onChange={(event) => {
                                        set_item15(event.target.value)
                                        handleRealTimeSubmit(realtimeForm16)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item15"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm17} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item16} onChange={generic_setter(set_item16)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm17)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item16"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Station ID/ sample source`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm18} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item17} onChange={(event) => {
                                        set_item17(event.target.value)
                                        handleRealTimeSubmit(realtimeForm18)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item17"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm19} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item18} onChange={generic_setter(set_item18)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm19)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item18"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Date of sampling`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm20} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item19} onChange={(event) => {
                                        set_item19(event.target.value)
                                        handleRealTimeSubmit(realtimeForm20)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item19"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm21} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item20} onChange={generic_setter(set_item20)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm21)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item20"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Date of analysis`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm22} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item21} onChange={(event) => {
                                        set_item21(event.target.value)
                                        handleRealTimeSubmit(realtimeForm22)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item21"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm23} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item22} onChange={generic_setter(set_item22)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm23)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item22"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Date sample received`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm18} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item17} onChange={(event) => {
                                        set_item17(event.target.value)
                                        handleRealTimeSubmit(realtimeForm18)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item17"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm19} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item18} onChange={generic_setter(set_item18)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm19)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item18"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Date test report issued`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm20} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item19} onChange={(event) => {
                                        set_item19(event.target.value)
                                        handleRealTimeSubmit(realtimeForm20)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item19"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm21} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item20} onChange={generic_setter(set_item20)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm21)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item20"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Test result name/ signature of person authorizing report`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm22} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item21} onChange={(event) => {
                                        set_item21(event.target.value)
                                        handleRealTimeSubmit(realtimeForm22)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item21"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm23} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item22} onChange={generic_setter(set_item22)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm23)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item22"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Name/ signature of analyst`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm24} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item23} onChange={(event) => {
                                        set_item23(event.target.value)
                                        handleRealTimeSubmit(realtimeForm24)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item23"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm25} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item24} onChange={generic_setter(set_item24)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm25)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item24"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Method of analysis (cited analytical method and reference)`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm26} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item25} onChange={(event) => {
                                        set_item23(event.target.value)
                                        handleRealTimeSubmit(realtimeForm26)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item25"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm27} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item26} onChange={generic_setter(set_item24)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm27)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item26"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className={styles.form_section}>
                <div className={styles.warning_container}>
                    <b>Note: </b>
                    <p>Check qualifications based on DAO 98-63, 03b Personnel. DENR criteria includes education, licentiate, relevant training and experience in environmental analysis and/ or management.</p>
                </div>
            </div>



            <hr className={styles.separator}/>

            <div className={styles.form_section_row}>
                <div className={styles.details_container_row_borderless}>
                    <p className={styles.section_header}>Person/s responsible for the technical validity of test reports (present setup)</p>
                </div>
                <div style={{width:"100%", display:"flex", justifyContent:"end"}}>
                    <button disabled={!isEditor} onClick={toggle_modal} className={styles.add_button}>
                        <AddIcon/>
                    </button>
                </div>
            </div>

            <table className={styles.information_table}>
                <tbody>
                    <tr className={styles.fillout_table_header}>
                        <td className={styles.fillout_table_cell_header}>Name/Designation</td>
                        <td className={styles.fillout_table_cell_header}>
                            <p>{`Type of report/s`}</p>
                            <p></p>
                            <p>{`(Specify whether Bacteriological Analysis, Physical-Chemical Analysis , Organics Analysis, Metals Analysis, Air Analysis, etc. )`}</p>
                        </td>
                        <td className={styles.fillout_table_cell_header}>
                            <p>{`Specify whether person signed under the heading of:`}</p> 
                            <p>{`analysed by, certified by, verified by, noted by, etc.`}</p>
                        </td>
                        <td className={styles.fillout_table_cell_header}>Meet the DENR Criteria</td>
                        <td className={styles.fillout_table_cell_header}>Attachment</td>
                        <td className={styles.action_col}>Action</td>
                    </tr>
                    
                    {
                        checklist_data?.persons_responsible?.map((item,idx) => {
                            return (
                                <tr key={idx} className={styles.fillout_table_row}>
                                    <td className={styles.fillout_table_cell}>{item.name}</td>
                                    <td className={styles.fillout_table_cell}>{item.type_of_report}</td>
                                    <td className={styles.fillout_table_cell}>{item.signed}</td>
                                    <td className={styles.fillout_table_cell}>{capitalize(item.denr_approved)}</td>
                                    {item?.attachment !== null && item?.attachment !== null &&              
                                        <td className={styles.fillout_table_cell_centered}>
                                            <Link href={`/${item.attachment}`} target={"_blank"}>                                  
                                                <VisibilityIcon 
                                                    sx={{fill:"darkslategray", cursor:"pointer"}}
                                                /> 
                                            </Link>
                                        </td>
                                    }
                                    <td className={styles.action_col}>
                                        <form action={deletePersonsResponsibleFormAction}>
                                            <input disabled={!isEditor} type="text" name="recordIdx" value={idx} hidden readOnly />
                                            <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                            <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                            <button disabled={!isEditor}>
                                                <ClearIcon style={{fill:"red", cursor:"pointer", scale:"0.8"}}/>
                                            </button>
                                        </form>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>

            <hr className={styles.separator}/>

            <div className={styles.form_section_row}>
                <div className={styles.details_container_row_borderless}>
                    <p className={styles.section_header}>Person/s recommended to be recognised by the DENR as responsible for the technical validity of test reports</p>
                </div>
                <div style={{width:"100%", display:"flex", justifyContent:"end"}}>
                    <button disabled={!isEditor} onClick={toggle_modal_recognized} className={styles.add_button}>
                        <AddIcon/>
                    </button>
                </div>
            </div>
            <table className={styles.information_table}>
                <tbody>
                    <tr className={styles.fillout_table_header}>
                        <td className={styles.fillout_table_cell_header}>
                            Full Name
                        </td>
                        <td className={styles.fillout_table_cell_header}>
                            Educational Attainment
                        </td>
                        <td className={styles.fillout_table_cell_header}>Profession</td>
                        <td className={styles.fillout_table_cell_header}>License No.</td>
                        <td className={styles.fillout_table_cell_header}>Area/s of Responsibility</td>
                        <td className={styles.action_col}>Action</td>
                    </tr>
                    
                    {
                        checklist_data?.persons_recognized?.map((item,idx) => {
                            return (
                                <tr key={idx} className={styles.fillout_table_row}>
                                    <td className={styles.fillout_table_cell}>{item.name}</td>
                                    <td className={styles.fillout_table_cell}>{item.education}</td>
                                    <td className={styles.fillout_table_cell}>{item.profession}</td>
                                    <td className={styles.fillout_table_cell}>{item.license}</td>
                                    <td className={styles.fillout_table_cell}>{item.responsibility}</td>
                                    <td className={styles.action_col}>
                                        <form action={deletePersonsRecognizedFormAction}>
                                            <input disabled={!isEditor} type="text" name="recordIdx" value={idx} hidden readOnly />
                                            <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                            <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                            <button disabled={!isEditor}>
                                                <ClearIcon style={{fill:"red", cursor:"pointer", scale:"0.8"}}/>
                                            </button>
                                        </form>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>

            

            <hr className={styles.separator}/>

            <div className={styles.form_section_row}>
                <div className={styles.details_container_row_borderless}>
                    <p className={styles.section_header}>Application document</p>
                </div>
            </div>
            
            
            <table className={styles.information_table}>
                <tbody>
                    <tr className={styles.fillout_table_header}>
                        <td className={styles.fillout_table_cell_header}>Item</td>
                        <td className={styles.fillout_table_cell_header_yesno}>Yes/No</td>
                        <td className={styles.fillout_table_cell_header}>Comment</td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Reference literature available in the laboratory`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm28} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item27} onChange={(event) => {
                                        set_item27(event.target.value)
                                        handleRealTimeSubmit(realtimeForm28)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item27"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm27} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item28} onChange={generic_setter(set_item28)} onBlur={(event) => {
                                        set_item28(event.target.value)
                                        handleRealTimeSubmit(realtimeForm27)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item28"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Standard Methods for the Examination of Water and Wastewater by APHA/ AWWA`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm29} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item29} onChange={(event) => {
                                        set_item29(event.target.value)
                                        handleRealTimeSubmit(realtimeForm29)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item29"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm30} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item30} onChange={generic_setter(set_item30)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm30)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item30"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Association of Official Analytical Chemists (AOAC)`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm31} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item31} onChange={(event) => {
                                        set_item31(event.target.value)
                                        handleRealTimeSubmit(realtimeForm31)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item31"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm32} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item32} onChange={generic_setter(set_item32)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm32)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item32"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`American Society for Testing and Materials (ASTM)`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm33} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item33} onChange={(event) => {
                                        set_item33(event.target.value)
                                        handleRealTimeSubmit(realtimeForm33)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item33"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm34} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item34} onChange={generic_setter(set_item34)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm34)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item34"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Material Safety and Data Sheets for every chemical/ standard used in the laboratory`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm35} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item35} onChange={(event) => {
                                        set_item35(event.target.value)
                                        handleRealTimeSubmit(realtimeForm35)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item35"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm36} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item36} onChange={generic_setter(set_item36)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm36)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item36"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Environmental Protection Agency CFRs`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm37} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item37} onChange={(event) => {
                                        set_item37(event.target.value)
                                        handleRealTimeSubmit(realtimeForm37)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item37"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm38} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item38} onChange={generic_setter(set_item38)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm38)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item38"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Others, Specify`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm39} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item39} onChange={(event) => {
                                        set_item39(event.target.value)
                                        handleRealTimeSubmit(realtimeForm39)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item39"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm40} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item40} onChange={generic_setter(set_item40)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm40)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item40"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Pollution control and waste management practices adopted by the laboratory`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm41} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item41} onChange={(event) => {
                                        set_item41(event.target.value)
                                        handleRealTimeSubmit(realtimeForm41)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item41"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm42} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item42} onChange={generic_setter(set_item42)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm42)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item42"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Floor plan of the laboratory and related facilities; ( 1:100 scale)`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm43} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item43} onChange={(event) => {
                                        set_item43(event.target.value)
                                        handleRealTimeSubmit(realtimeForm43)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item43"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm44} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item44} onChange={generic_setter(set_item44)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm44)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item44"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>


                </tbody>
            </table>

            <hr className={styles.separator}/>

            <div className={styles.form_section_row}>
                <div className={styles.details_container_row_borderless}>
                    <p className={styles.section_header}>Physical layout</p>
                </div>
            </div>
            
            
            <table className={styles.information_table}>
                <tbody>
                    <tr className={styles.fillout_table_header}>
                        <td className={styles.fillout_table_cell_header}>Item</td>
                        <td className={styles.fillout_table_cell_header_yesno}>Yes/No</td>
                        <td className={styles.fillout_table_cell_header}>Comment</td>
                    </tr>


                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`The laboratory shall be housed in a permanent building constructed of strong materials, preferably, concrete or semi-concrete.`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm45} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item45} onChange={(event) => {
                                        set_item45(event.target.value)
                                        handleRealTimeSubmit(realtimeForm45)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item45"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm46} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item46} onChange={generic_setter(set_item46)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm46)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item46"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.information_table_row_header}>
                            <p style={{width:"100%", textAlign:"center", fontSize:"15px"}}>Laboratory Facility Requirements</p>
                        </td>
                    </tr>
                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Adequate running water supply`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm47} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item47} onChange={(event) => {
                                        set_item47(event.target.value)
                                        handleRealTimeSubmit(realtimeForm47)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item47"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm48} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item48} onChange={generic_setter(set_item48)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm48)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item48"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Appropriate sinks with running water`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm49} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item49} onChange={(event) => {
                                        set_item49(event.target.value)
                                        handleRealTimeSubmit(realtimeForm49)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item49"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm50} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item50} onChange={generic_setter(set_item50)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm50)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item50"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Water tanks`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm51} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item51} onChange={(event) => {
                                        set_item51(event.target.value)
                                        handleRealTimeSubmit(realtimeForm51)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item51"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm52} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item52} onChange={generic_setter(set_item52)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm52)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item52"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Suitable reagent water supply (e. g. distillation)`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm53} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item53} onChange={(event) => {
                                        set_item53(event.target.value)
                                        handleRealTimeSubmit(realtimeForm53)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item53"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm54} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item54} onChange={generic_setter(set_item54)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm54)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item54"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Records maintained which document replenishment of consumables used in reagent`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm55} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item55} onChange={(event) => {
                                        set_item55(event.target.value)
                                        handleRealTimeSubmit(realtimeForm55)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item55"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm56} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item56} onChange={generic_setter(set_item56)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm56)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item56"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Regular electric power supply`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm57} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item57} onChange={(event) => {
                                        set_item57(event.target.value)
                                        handleRealTimeSubmit(realtimeForm57)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item57"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm58} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item58} onChange={generic_setter(set_item58)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm58)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item58"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Sufficient outlets; appropriately grounded and free of surges with voltage regulators in use, if necessary and provision for the items below`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm59} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item59} onChange={(event) => {
                                        set_item59(event.target.value)
                                        handleRealTimeSubmit(realtimeForm59)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item59"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm60} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item60} onChange={generic_setter(set_item60)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm60)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item60"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Emergency power source.`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm61} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item61} onChange={(event) => {
                                        set_item61(event.target.value)
                                        handleRealTimeSubmit(realtimeForm61)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item61"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm62} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item62} onChange={generic_setter(set_item62)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm62)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item62"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`The laboratory shall have adequate drainage, preferably with separate waste lines for domestic sewage and laboratory wastewater.`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm63} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item63} onChange={(event) => {
                                        set_item63(event.target.value)
                                        handleRealTimeSubmit(realtimeForm63)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item63"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm64} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item64} onChange={generic_setter(set_item64)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm64)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item64"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>
                    

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Work rooms shall be well ventilated`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm65} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item65} onChange={(event) => {
                                        set_item65(event.target.value)
                                        handleRealTimeSubmit(realtimeForm65)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item65"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm66} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item66} onChange={generic_setter(set_item66)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm66)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item66"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Free of dust, fumes and oil; suitable for sample aeration and / or purging with adequate provisions for either natural or artificial lighting.`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm67} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item67} onChange={(event) => {
                                        set_item67(event.target.value)
                                        handleRealTimeSubmit(realtimeForm67)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item67"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm68} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item68} onChange={generic_setter(set_item68)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm68)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item68"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Adequate lighting at work area`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm69} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item69} onChange={(event) => {
                                        set_item69(event.target.value)
                                        handleRealTimeSubmit(realtimeForm69)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item69"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm70} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item70} onChange={generic_setter(set_item70)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm70)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item70"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`The working space of the laboratory shall correlate with the volume and type of analysis to be undertaken`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm71} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item71} onChange={(event) => {
                                        set_item71(event.target.value)
                                        handleRealTimeSubmit(realtimeForm71)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item71"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm72} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item72} onChange={generic_setter(set_item72)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm72)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item72"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Including provisions for periods of peak work load.`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm73} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item73} onChange={(event) => {
                                        set_item73(event.target.value)
                                        handleRealTimeSubmit(realtimeForm73)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item73"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm74} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item74} onChange={generic_setter(set_item74)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm74)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item74"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Working space requirement shall include sufficient bench top area for processing samples,`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm75} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item75} onChange={(event) => {
                                        set_item75(event.target.value)
                                        handleRealTimeSubmit(realtimeForm75)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item75"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm76} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item76} onChange={generic_setter(set_item76)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm76)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item76"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Adequate bench space i.e. at least two (2) square meters usable bench space per analyst;`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm77} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item77} onChange={(event) => {
                                        set_item77(event.target.value)
                                        handleRealTimeSubmit(realtimeForm77)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item77"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm78} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item78} onChange={generic_setter(set_item78)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm78)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item78"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`A walking space of at least one(1) meter between tables`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm79} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item79} onChange={(event) => {
                                        set_item79(event.target.value)
                                        handleRealTimeSubmit(realtimeForm79)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item79"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm80} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item80} onChange={generic_setter(set_item80)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm80)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item80"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Bench tops made of stainless steel, epoxy plastic or smooth impervious material`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm81} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item81} onChange={(event) => {
                                        set_item81(event.target.value)
                                        handleRealTimeSubmit(realtimeForm81)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item81"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm82} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item82} onChange={generic_setter(set_item82)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm82)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item82"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>


                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Storage space for chemicals, glassware, and portable and fixed equipment,`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm83} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item83} onChange={(event) => {
                                        set_item83(event.target.value)
                                        handleRealTimeSubmit(realtimeForm83)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item83"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm84} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item84} onChange={generic_setter(set_item84)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm84)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item84"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Appropriate refrigerated storage (e.g. 1-4°C), including freezer storage, available for samples and other materials and`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm85} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item85} onChange={(event) => {
                                        set_item85(event.target.value)
                                        handleRealTimeSubmit(realtimeForm85)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item85"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm86} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item86} onChange={generic_setter(set_item86)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm86)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item86"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`An adequate appropriate area for cleaning glassware and sterilizing materials.`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm87} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item87} onChange={(event) => {
                                        set_item87(event.target.value)
                                        handleRealTimeSubmit(realtimeForm87)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item87"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm88} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item88} onChange={generic_setter(set_item88)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm88)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item88"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`There shall be effective separation between neighbouring units when the activities therein are incompatible.`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm89} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item89} onChange={(event) => {
                                        set_item89(event.target.value)
                                        handleRealTimeSubmit(realtimeForm89)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item89"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm90} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item90} onChange={generic_setter(set_item90)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm90)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item90"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`There shall be adequate physical provisions for the safety of laboratory personnel considering exposure to chemicals, inflammable reagents, fires, and similar substances.`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm91} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item91} onChange={(event) => {
                                        set_item91(event.target.value)
                                        handleRealTimeSubmit(realtimeForm91)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item91"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm92} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item92} onChange={generic_setter(set_item92)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm92)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item92"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>


                    <tr>
                        <td className={styles.information_table_row_header}>
                            <p style={{width:"100%", textAlign:"center", fontSize:"15px"}}>Work Instructions/ Documents regarding emergency preparedness and response are available in the lab </p>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Emergency exit and egress,`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm93} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item93} onChange={(event) => {
                                        set_item93(event.target.value)
                                        handleRealTimeSubmit(realtimeForm93)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item93"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm94} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item94} onChange={generic_setter(set_item94)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm94)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item94"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Exits are clearly marked and readily-visible`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm95} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item95} onChange={(event) => {
                                        set_item95(event.target.value)
                                        handleRealTimeSubmit(realtimeForm95)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item95"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm96} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item96} onChange={generic_setter(set_item96)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm96)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item96"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`All fire doors are self closing and are kept closed`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm97} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item97} onChange={(event) => {
                                        set_item97(event.target.value)
                                        handleRealTimeSubmit(realtimeForm97)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item97"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm98} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item98} onChange={generic_setter(set_item98)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm98)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item98"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Fire drills are conducted regularly`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm99} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item99} onChange={(event) => {
                                        set_item99(event.target.value)
                                        handleRealTimeSubmit(realtimeForm99)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item99"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm100} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item100} onChange={generic_setter(set_item100)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm100)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item100"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>
                    

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Emergency telephone nos. are visibly posted`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm101} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item101} onChange={(event) => {
                                        set_item101(event.target.value)
                                        handleRealTimeSubmit(realtimeForm101)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item101"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm102} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item102} onChange={generic_setter(set_item102)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm102)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item102"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Emergency shower – clearly labelled and these areas are clear from obstructions`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm103} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item103} onChange={(event) => {
                                        set_item103(event.target.value)
                                        handleRealTimeSubmit(realtimeForm103)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item103"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm104} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item104} onChange={generic_setter(set_item104)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm104)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item104"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Emergency shower – Located in, or in close proximity to, each area where hazardous chemicals are used and stored`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm105} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item105} onChange={(event) => {
                                        set_item105(event.target.value)
                                        handleRealTimeSubmit(realtimeForm105)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item105"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm106} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item106} onChange={generic_setter(set_item106)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm106)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item106"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Emergency shower – in sound working condition.`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm107} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item107} onChange={(event) => {
                                        set_item107(event.target.value)
                                        handleRealTimeSubmit(realtimeForm107)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item107"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm108} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item108} onChange={generic_setter(set_item108)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm108)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item108"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Emergency eyewash - clearly labelled and these areas are clear from obstructions`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm109} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item109} onChange={(event) => {
                                        set_item109(event.target.value)
                                        handleRealTimeSubmit(realtimeForm109)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item109"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm110} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item110} onChange={generic_setter(set_item110)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm110)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item110"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                        <p>{`Emergency eyewash - located in, or in close proximity to, each area where hazardous chemicals are used and stored`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm111} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item111} onChange={(event) => {
                                        set_item111(event.target.value)
                                        handleRealTimeSubmit(realtimeForm111)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item111"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm112} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item112} onChange={generic_setter(set_item112)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm112)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item112"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                        <p>{`Emergency eyewash - in sound working condition`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm113} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item113} onChange={(event) => {
                                        set_item113(event.target.value)
                                        handleRealTimeSubmit(realtimeForm113)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item113"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm114} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item114} onChange={generic_setter(set_item114)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm114)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item114"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Fire extinguishers - adequate number of extinguishers of the proper type and size located in each work area`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm115} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item115} onChange={(event) => {
                                        set_item115(event.target.value)
                                        handleRealTimeSubmit(realtimeForm115)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item115"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm116} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item116} onChange={generic_setter(set_item116)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm116)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item116"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>


                    <tr>
                        <td className={styles.information_table_row_header}>
                            <p style={{width:"100%", textAlign:"center", fontSize:"15px"}}>First aid kits</p>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`First aid kits`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm117} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item117} onChange={(event) => {
                                        set_item117(event.target.value)
                                        handleRealTimeSubmit(realtimeForm117)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item117"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm118} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item118} onChange={generic_setter(set_item118)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm118)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item118"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Adhesive bandages, various sizes`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm119} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item119} onChange={(event) => {
                                        set_item119(event.target.value)
                                        handleRealTimeSubmit(realtimeForm119)
                                    }}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item119"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                        <td className={styles.fillout_table_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm120} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item120} onChange={generic_setter(set_item120)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm120)
                                    }}/>
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item120"} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>


                    <tr className={styles.fillout_table_row}>  
                        <td className={styles.fillout_table_cell}>  
                            <p>{`Sterile pads, various sizes`}</p>  
                        </td>  
                        <td className={styles.fillout_table_yesno_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm121} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item121} onChange={(event) => {  
                                        set_item121(event.target.value)  
                                        handleRealTimeSubmit(realtimeForm121)  
                                    }}>  
                                        <option value={""}>---</option>  
                                        <option value={"yes"}>Yes</option>  
                                        <option value={"no"}>No</option>  
                                    </select>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item121"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                        <td className={styles.fillout_table_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm122} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item122} onChange={generic_setter(set_item122)} onBlur={(event) => {  
                                        handleRealTimeSubmit(realtimeForm122)  
                                    }}/>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item122"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                    </tr>  

                    <tr className={styles.fillout_table_row}>  
                        <td className={styles.fillout_table_cell}>  
                            <p>{`Sterile sponges; gauze`}</p>  
                        </td>  
                        <td className={styles.fillout_table_yesno_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm123} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item123} onChange={(event) => {  
                                        set_item123(event.target.value)  
                                        handleRealTimeSubmit(realtimeForm123)  
                                    }}>  
                                        <option value={""}>---</option>  
                                        <option value={"yes"}>Yes</option>  
                                        <option value={"no"}>No</option>  
                                    </select>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item123"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                        <td className={styles.fillout_table_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm124} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item124} onChange={generic_setter(set_item124)} onBlur={(event) => {  
                                        handleRealTimeSubmit(realtimeForm124)  
                                    }}/>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item124"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                    </tr>  
                    <tr className={styles.fillout_table_row}>  
                        <td className={styles.fillout_table_cell}>  
                            <p>{`Eye pads`}</p>  
                        </td>  
                        <td className={styles.fillout_table_yesno_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm125} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item125} onChange={(event) => {  
                                        set_item125(event.target.value)  
                                        handleRealTimeSubmit(realtimeForm125)  
                                    }}>  
                                        <option value={""}>---</option>  
                                        <option value={"yes"}>Yes</option>  
                                        <option value={"no"}>No</option>  
                                    </select>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item125"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                        <td className={styles.fillout_table_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm126} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item126} onChange={generic_setter(set_item126)} onBlur={(event) => {  
                                        handleRealTimeSubmit(realtimeForm126)  
                                    }}/>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item126"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                    </tr>  
                    <tr className={styles.fillout_table_row}>  
                        <td className={styles.fillout_table_cell}>  
                            <p>{`Adhesive tape`}</p>  
                        </td>  
                        <td className={styles.fillout_table_yesno_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm127} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item127} onChange={(event) => {  
                                        set_item127(event.target.value)  
                                        handleRealTimeSubmit(realtimeForm127)  
                                    }}>  
                                        <option value={""}>---</option>  
                                        <option value={"yes"}>Yes</option>  
                                        <option value={"no"}>No</option>  
                                    </select>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item127"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                        <td className={styles.fillout_table_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm128} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item128} onChange={generic_setter(set_item128)} onBlur={(event) => {  
                                        handleRealTimeSubmit(realtimeForm128)  
                                    }}/>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item128"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                    </tr>  
                    <tr className={styles.fillout_table_row}>  
                        <td className={styles.fillout_table_cell}>  
                            <p>{`First aid booklet`}</p>  
                        </td>  
                        <td className={styles.fillout_table_yesno_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm129} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item129} onChange={(event) => {  
                                        set_item129(event.target.value)  
                                        handleRealTimeSubmit(realtimeForm129)  
                                    }}>  
                                        <option value={""}>---</option>  
                                        <option value={"yes"}>Yes</option>  
                                        <option value={"no"}>No</option>  
                                    </select>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item129"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                        <td className={styles.fillout_table_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm130} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item130} onChange={generic_setter(set_item130)} onBlur={(event) => {  
                                        handleRealTimeSubmit(realtimeForm130)  
                                    }}/>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item130"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                    </tr>  



                    <tr className={styles.fillout_table_row}>  
                        <td className={styles.fillout_table_cell}>  
                            <p>{`Antiseptic wipes`}</p>  
                        </td>  
                        <td className={styles.fillout_table_yesno_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm131} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item131} onChange={(event) => {  
                                        set_item131(event.target.value)  
                                        handleRealTimeSubmit(realtimeForm131)  
                                    }}>  
                                        <option value={""}>---</option>  
                                        <option value={"yes"}>Yes</option>  
                                        <option value={"no"}>No</option>  
                                    </select>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item131"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                        <td className={styles.fillout_table_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm132} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item132} onChange={generic_setter(set_item132)} onBlur={(event) => {  
                                        handleRealTimeSubmit(realtimeForm132)  
                                    }}/>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item132"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                    </tr>  

                    <tr className={styles.fillout_table_row}>  
                        <td className={styles.fillout_table_cell}>  
                            <p>{`Alcohol swabs`}</p>  
                        </td>  
                        <td className={styles.fillout_table_yesno_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm133} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item133} onChange={(event) => {  
                                        set_item133(event.target.value)  
                                        handleRealTimeSubmit(realtimeForm133)  
                                    }}>  
                                        <option value={""}>---</option>  
                                        <option value={"yes"}>Yes</option>  
                                        <option value={"no"}>No</option>  
                                    </select>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item133"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                        <td className={styles.fillout_table_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm134} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item134} onChange={generic_setter(set_item134)} onBlur={(event) => {  
                                        handleRealTimeSubmit(realtimeForm134)  
                                    }}/>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item134"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                    </tr>  


                    <tr className={styles.fillout_table_row}>  
                        <td className={styles.fillout_table_cell}>  
                            <p>{`Cold packs`}</p>  
                        </td>  
                        <td className={styles.fillout_table_yesno_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm135} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item135} onChange={(event) => {  
                                        set_item135(event.target.value)  
                                        handleRealTimeSubmit(realtimeForm135)  
                                    }}>  
                                        <option value={""}>---</option>  
                                        <option value={"yes"}>Yes</option>  
                                        <option value={"no"}>No</option>  
                                    </select>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item135"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                        <td className={styles.fillout_table_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm136} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item136} onChange={generic_setter(set_item136)} onBlur={(event) => {  
                                        handleRealTimeSubmit(realtimeForm136)  
                                    }}/>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item136"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                    </tr>  


                    <tr className={styles.fillout_table_row}>  
                        <td className={styles.fillout_table_cell}>  
                            <p>{`Burn cream`}</p>  
                        </td>  
                        <td className={styles.fillout_table_yesno_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm137} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item137} onChange={(event) => {  
                                        set_item137(event.target.value)  
                                        handleRealTimeSubmit(realtimeForm137)  
                                    }}>  
                                        <option value={""}>---</option>  
                                        <option value={"yes"}>Yes</option>  
                                        <option value={"no"}>No</option>  
                                    </select>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item137"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                        <td className={styles.fillout_table_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm138} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item138} onChange={generic_setter(set_item138)} onBlur={(event) => {  
                                        handleRealTimeSubmit(realtimeForm138)  
                                    }}/>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item138"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                    </tr>  


                    <tr className={styles.fillout_table_row}>  
                        <td className={styles.fillout_table_cell}>  
                            <p>{`Antiseptic cream`}</p>  
                        </td>  
                        <td className={styles.fillout_table_yesno_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm139} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item139} onChange={(event) => {  
                                        set_item139(event.target.value)  
                                        handleRealTimeSubmit(realtimeForm139)  
                                    }}>  
                                        <option value={""}>---</option>  
                                        <option value={"yes"}>Yes</option>  
                                        <option value={"no"}>No</option>  
                                    </select>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item139"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                        <td className={styles.fillout_table_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm140} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item140} onChange={generic_setter(set_item140)} onBlur={(event) => {  
                                        handleRealTimeSubmit(realtimeForm140)  
                                    }}/>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item140"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                    </tr>  

                    <tr className={styles.fillout_table_row}>  
                        <td className={styles.fillout_table_cell}>  
                            <p>{`Absorbent cotton`}</p>  
                        </td>  
                        <td className={styles.fillout_table_yesno_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm141} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item141} onChange={(event) => {  
                                        set_item141(event.target.value)  
                                        handleRealTimeSubmit(realtimeForm141)  
                                    }}>  
                                        <option value={""}>---</option>  
                                        <option value={"yes"}>Yes</option>  
                                        <option value={"no"}>No</option>  
                                    </select>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item141"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                        <td className={styles.fillout_table_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm142} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item142} onChange={generic_setter(set_item142)} onBlur={(event) => {  
                                        handleRealTimeSubmit(realtimeForm142)  
                                    }}/>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item142"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                    </tr>  

                    <tr className={styles.fillout_table_row}>  
                        <td className={styles.fillout_table_cell}>  
                            <p>{`Scissors`}</p>  
                        </td>  
                        <td className={styles.fillout_table_yesno_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm143} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item143} onChange={(event) => {  
                                        set_item143(event.target.value)  
                                        handleRealTimeSubmit(realtimeForm143)  
                                    }}>  
                                        <option value={""}>---</option>  
                                        <option value={"yes"}>Yes</option>  
                                        <option value={"no"}>No</option>  
                                    </select>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item143"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                        <td className={styles.fillout_table_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm144} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item144} onChange={generic_setter(set_item144)} onBlur={(event) => {  
                                        handleRealTimeSubmit(realtimeForm144)  
                                    }}/>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item144"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                    </tr>  

                    <tr className={styles.fillout_table_row}>  
                        <td className={styles.fillout_table_cell}>  
                            <p>{`Tweezers`}</p>  
                        </td>  
                        <td className={styles.fillout_table_yesno_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm145} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item145} onChange={(event) => {  
                                        set_item145(event.target.value)  
                                        handleRealTimeSubmit(realtimeForm145)  
                                    }}>  
                                        <option value={""}>---</option>  
                                        <option value={"yes"}>Yes</option>  
                                        <option value={"no"}>No</option>  
                                    </select>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item145"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                        <td className={styles.fillout_table_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm146} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item146} onChange={generic_setter(set_item146)} onBlur={(event) => {  
                                        handleRealTimeSubmit(realtimeForm146)  
                                    }}/>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item146"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                    </tr>  

                    <tr className={styles.fillout_table_row}>  
                        <td className={styles.fillout_table_cell}>  
                            <p>{`Ipecac syrup or table salt for inducing vomiting`}</p>  
                        </td>  
                        <td className={styles.fillout_table_yesno_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm147} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item147} onChange={(event) => {  
                                        set_item147(event.target.value)  
                                        handleRealTimeSubmit(realtimeForm147)  
                                    }}>  
                                        <option value={""}>---</option>  
                                        <option value={"yes"}>Yes</option>  
                                        <option value={"no"}>No</option>  
                                    </select>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item147"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                        <td className={styles.fillout_table_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm148} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item148} onChange={generic_setter(set_item148)} onBlur={(event) => {  
                                        handleRealTimeSubmit(realtimeForm148)  
                                    }}/>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item148"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                    </tr>  

                    <tr className={styles.fillout_table_row}>  
                        <td className={styles.fillout_table_cell}>  
                            <p>{`Activated charcoal for making a slurry to drink`}</p>  
                        </td>  
                        <td className={styles.fillout_table_yesno_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm149} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item149} onChange={(event) => {  
                                        set_item149(event.target.value)  
                                        handleRealTimeSubmit(realtimeForm149)  
                                    }}>  
                                        <option value={""}>---</option>  
                                        <option value={"yes"}>Yes</option>  
                                        <option value={"no"}>No</option>  
                                    </select>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item149"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                        <td className={styles.fillout_table_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm150} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item150} onChange={generic_setter(set_item150)} onBlur={(event) => {  
                                        handleRealTimeSubmit(realtimeForm150)  
                                    }}/>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item150"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                    </tr>  

                    <tr className={styles.fillout_table_row}>  
                        <td className={styles.fillout_table_cell}>  
                            <p>{`Fume hoods - Maalox, Milk of Magnesia or Aluminum gel to neutralise dilute acids`}</p>  
                        </td>  
                        <td className={styles.fillout_table_yesno_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm151} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item151} onChange={(event) => {  
                                        set_item151(event.target.value)  
                                        handleRealTimeSubmit(realtimeForm151)  
                                    }}>  
                                        <option value={""}>---</option>  
                                        <option value={"yes"}>Yes</option>  
                                        <option value={"no"}>No</option>  
                                    </select>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item151"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                        <td className={styles.fillout_table_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm152} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item152} onChange={generic_setter(set_item152)} onBlur={(event) => {  
                                        handleRealTimeSubmit(realtimeForm152)  
                                    }}/>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item152"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                    </tr>  

                    <tr className={styles.fillout_table_row}>  
                        <td className={styles.fillout_table_cell}>  
                            <p>{`Fume hoods - Iodine / merthiolate`}</p>  
                        </td>  
                        <td className={styles.fillout_table_yesno_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm153} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item153} onChange={(event) => {  
                                        set_item153(event.target.value)  
                                        handleRealTimeSubmit(realtimeForm153)  
                                    }}>  
                                        <option value={""}>---</option>  
                                        <option value={"yes"}>Yes</option>  
                                        <option value={"no"}>No</option>  
                                    </select>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item153"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                        <td className={styles.fillout_table_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm154} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item154} onChange={generic_setter(set_item154)} onBlur={(event) => {  
                                        handleRealTimeSubmit(realtimeForm154)  
                                    }}/>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item154"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                    </tr>  

                    <tr className={styles.fillout_table_row}>  
                        <td className={styles.fillout_table_cell}>  
                            <p>{`Fume hoods - sufficient number and in sound working condition ( i.e. able to maintain face velocity as appropriate e.g. 30 ml / min or a certification from OSHA or from the supplier is available)`}</p>  
                        </td>  
                        <td className={styles.fillout_table_yesno_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm155} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item155} onChange={(event) => {  
                                        set_item155(event.target.value)  
                                        handleRealTimeSubmit(realtimeForm155)  
                                    }}>  
                                        <option value={""}>---</option>  
                                        <option value={"yes"}>Yes</option>  
                                        <option value={"no"}>No</option>  
                                    </select>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item155"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                        <td className={styles.fillout_table_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm156} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item156} onChange={generic_setter(set_item156)} onBlur={(event) => {  
                                        handleRealTimeSubmit(realtimeForm156)  
                                    }}/>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item156"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                    </tr>  

                    <tr>
                        <td className={styles.information_table_row_header}>
                            <p style={{width:"100%", textAlign:"center", fontSize:"15px"}}>Protective personnel equipment</p>
                        </td>
                    </tr>
                    <tr className={styles.fillout_table_row}>  
                        <td className={styles.fillout_table_cell}>  
                            <p>{`Marked with operating heights, average face velocity, and any restrictions for use`}</p>  
                        </td>  
                        <td className={styles.fillout_table_yesno_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm157} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item157} onChange={(event) => {  
                                        set_item157(event.target.value)  
                                        handleRealTimeSubmit(realtimeForm157)  
                                    }}>  
                                        <option value={""}>---</option>  
                                        <option value={"yes"}>Yes</option>  
                                        <option value={"no"}>No</option>  
                                    </select>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item157"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                        <td className={styles.fillout_table_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm158} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item158} onChange={generic_setter(set_item158)} onBlur={(event) => {  
                                        handleRealTimeSubmit(realtimeForm158)  
                                    }}/>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item158"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                    </tr>  

                    <tr className={styles.fillout_table_row}>  
                        <td className={styles.fillout_table_cell}>  
                            <p>{`Not cluttered with chemicals, equipment, etc.`}</p>  
                        </td>  
                        <td className={styles.fillout_table_yesno_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm159} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item159} onChange={(event) => {  
                                        set_item159(event.target.value)  
                                        handleRealTimeSubmit(realtimeForm159)  
                                    }}>  
                                        <option value={""}>---</option>  
                                        <option value={"yes"}>Yes</option>  
                                        <option value={"no"}>No</option>  
                                    </select>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item159"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                        <td className={styles.fillout_table_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm160} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item160} onChange={generic_setter(set_item160)} onBlur={(event) => {  
                                        handleRealTimeSubmit(realtimeForm160)  
                                    }}/>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item160"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                    </tr>  
                    <tr className={styles.fillout_table_row}>  
                        <td className={styles.fillout_table_cell}>  
                            <p>{`Eye protection is available ( goggles or face masks) and used`}</p>  
                        </td>  
                        <td className={styles.fillout_table_yesno_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm161} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item161} onChange={(event) => {  
                                        set_item161(event.target.value)  
                                        handleRealTimeSubmit(realtimeForm161)  
                                    }}>  
                                        <option value={""}>---</option>  
                                        <option value={"yes"}>Yes</option>  
                                        <option value={"no"}>No</option>  
                                    </select>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item161"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                        <td className={styles.fillout_table_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm162} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item162} onChange={generic_setter(set_item162)} onBlur={(event) => {  
                                        handleRealTimeSubmit(realtimeForm162)  
                                    }}/>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item162"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                    </tr>  

                    <tr className={styles.fillout_table_row}>  
                        <td className={styles.fillout_table_cell}>  
                            <p>{`Protective gloves are available and matched to the hazards involved`}</p>  
                        </td>  
                        <td className={styles.fillout_table_yesno_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm163} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item163} onChange={(event) => {  
                                        set_item163(event.target.value)  
                                        handleRealTimeSubmit(realtimeForm163)  
                                    }}>  
                                        <option value={""}>---</option>  
                                        <option value={"yes"}>Yes</option>  
                                        <option value={"no"}>No</option>  
                                    </select>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item163"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                        <td className={styles.fillout_table_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm164} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item164} onChange={generic_setter(set_item164)} onBlur={(event) => {  
                                        handleRealTimeSubmit(realtimeForm164)  
                                    }}/>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item164"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                    </tr>  
                    <tr className={styles.fillout_table_row}>  
                        <td className={styles.fillout_table_cell}>  
                            <p>{`Laboratory gowns/ coats, tyvec garments, etc., are available and used`}</p>  
                        </td>  
                        <td className={styles.fillout_table_yesno_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm165} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item165} onChange={(event) => {  
                                        set_item165(event.target.value)  
                                        handleRealTimeSubmit(realtimeForm165)  
                                    }}>  
                                        <option value={""}>---</option>  
                                        <option value={"yes"}>Yes</option>  
                                        <option value={"no"}>No</option>  
                                    </select>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item165"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                        <td className={styles.fillout_table_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm166} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item166} onChange={generic_setter(set_item166)} onBlur={(event) => {  
                                        handleRealTimeSubmit(realtimeForm166)  
                                    }}/>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item166"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                    </tr>  

                    <tr className={styles.fillout_table_row}>  
                        <td className={styles.fillout_table_cell}>  
                            <p>{`Respirators are provided when necessary and, selected on the basis of the hazard present`}</p>  
                        </td>  
                        <td className={styles.fillout_table_yesno_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm167} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item167} onChange={(event) => {  
                                        set_item167(event.target.value)  
                                        handleRealTimeSubmit(realtimeForm167)  
                                    }}>  
                                        <option value={""}>---</option>  
                                        <option value={"yes"}>Yes</option>  
                                        <option value={"no"}>No</option>  
                                    </select>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item167"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                        <td className={styles.fillout_table_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm168} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item168} onChange={generic_setter(set_item168)} onBlur={(event) => {  
                                        handleRealTimeSubmit(realtimeForm168)  
                                    }}/>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item168"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                    </tr>  
                </tbody>
            </table>

            <hr className={styles.separator}/>

            <div className={styles.form_section}>
                <div className={styles.warning_container}>
                    <b style={{marginBottom:"10px"}}>Note: </b>
                    <ul style={{paddingLeft:"20px", paddingBottom:"20px"}}>
                        <li style={{marginBottom:"20px", fontSize:"15px"}}> The laboratory shall be required to participate in interlaboratory exercises organized by the EMB. The laboratory shall be required to participate in interlaboratory exercise recommended by the EMB.</li>
                        <li style={{fontSize:"15px"}}>Ask for a copy of the proficiency test/ interlaboratory comparison certificate for the past three (3) years.</li>
                    </ul>
                    
                </div>
            </div>

            <div className={styles.form_section}>
                <div className={styles.note_container}>
                    
                    <b style={{marginBottom:"10px"}}>Criteria for Performance Evaluation:</b>
                    <p style={{marginBottom:"20px", fontSize:"15px"}}>{`/ z / ≤ 2 = satisfactory performance`}</p>
                    <p style={{marginBottom:"20px", fontSize:"15px"}}>{`2 < / z / < 3 = questionable result`}</p>
                    <p style={{marginBottom:"20px", fontSize:"15px"}}>{`/ z / ≥ 3 = unsatisfactory performance`}</p>
                </div>
            </div>

            <div className={styles.form_section_row}>
                <div className={styles.details_container_row_borderless}>
                    <p className={styles.section_header}>Proficiency Testing</p>
                </div>
                <div style={{width:"100%", display:"flex", justifyContent:"end"}}>
                    <button disabled={!isEditor} onClick={toggle_modal_proficiency} className={styles.add_button}>
                        <AddIcon/>
                    </button>
                </div>
            </div>

            <table className={styles.information_table}>
                <tbody>
                    <tr className={styles.fillout_table_header}>
                        <td className={styles.fillout_table_cell_header}>Date</td>
                        <td className={styles.fillout_table_cell_header}>Title</td>
                        <td className={styles.fillout_table_cell_header}>Organizing Body</td>
                        <td className={styles.fillout_table_cell_header}>Matrix</td>
                        <td className={styles.fillout_table_cell_header}>Parameter</td>
                        <td className={styles.fillout_table_cell_header}>Comments by EMB on Performance</td>
                        <td className={styles.action_col}>Action</td>
                    </tr>
                    
                    {
                        checklist_data?.proficiency_tests?.map((item,idx) => {
                            return (
                                <tr key={idx} className={styles.fillout_table_row}>
                                    <td className={styles.fillout_table_cell}>{item.date}</td>
                                    <td className={styles.fillout_table_cell}>{capitalize(item.title)}</td>
                                    <td className={styles.fillout_table_cell}>{capitalize(item.organizing_body)}</td>
                                    <td className={styles.fillout_table_cell}>{capitalize(item.matrix)}</td>
                                    <td className={styles.fillout_table_cell}>{capitalize(item.parameters)}</td>
                                    <td className={styles.fillout_table_cell}>{capitalize(item.performance)}</td>
                                    <td className={styles.action_col}>
                                        <form action={deleteProficiencyFormAction}>
                                            <input disabled={!isEditor} type="text" name="recordIdx" value={idx} hidden readOnly />
                                            <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                            <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                            <button disabled={!isEditor}>
                                                <ClearIcon style={{fill:"red", cursor:"pointer", scale:"0.8"}}/>
                                            </button>
                                        </form>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>


            <table className={styles.information_table}>
                <tbody>
                    <tr className={styles.fillout_table_row}>  
                        <td className={styles.fillout_table_cell}>  
                            <p>{`Laboratory evaluate their performance in Proficiency test/ Interlaboratory comparison`}</p>  
                        </td>  
                        <td className={styles.fillout_table_yesno_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm169} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item169} onChange={(event) => {  
                                        set_item169(event.target.value)  
                                        handleRealTimeSubmit(realtimeForm169)  
                                    }}>  
                                        <option value={""}>---</option>  
                                        <option value={"yes"}>Yes</option>  
                                        <option value={"no"}>No</option>  
                                    </select>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item169"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                        <td className={styles.fillout_table_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm170} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item170} onChange={generic_setter(set_item170)} onBlur={(event) => {  
                                        handleRealTimeSubmit(realtimeForm170)  
                                    }}/>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item170"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                    </tr>  
                    <tr className={styles.fillout_table_row}>  
                        <td className={styles.fillout_table_cell}>  
                            <p>{`Conduct corrective action/s whenever necessary`}</p>  
                        </td>  
                        <td className={styles.fillout_table_yesno_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm171} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item171} onChange={(event) => {  
                                        set_item171(event.target.value)  
                                        handleRealTimeSubmit(realtimeForm171)  
                                    }}>  
                                        <option value={""}>---</option>  
                                        <option value={"yes"}>Yes</option>  
                                        <option value={"no"}>No</option>  
                                    </select>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item171"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                        <td className={styles.fillout_table_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm172} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item172} onChange={generic_setter(set_item172)} onBlur={(event) => {  
                                        handleRealTimeSubmit(realtimeForm172)  
                                    }}/>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item172"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                    </tr>  
                    <tr className={styles.fillout_table_row}>  
                        <td className={styles.fillout_table_cell}>  
                            <p>{`Corrective action/s conducted documented and or recorded.`}</p>  
                        </td>  
                        <td className={styles.fillout_table_yesno_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm173} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item173} onChange={(event) => {  
                                        set_item173(event.target.value)  
                                        handleRealTimeSubmit(realtimeForm173)  
                                    }}>  
                                        <option value={""}>---</option>  
                                        <option value={"yes"}>Yes</option>  
                                        <option value={"no"}>No</option>  
                                    </select>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item173"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                        <td className={styles.fillout_table_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm174} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item174} onChange={generic_setter(set_item174)} onBlur={(event) => {  
                                        handleRealTimeSubmit(realtimeForm174)  
                                    }}/>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item174"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                    </tr>  
                </tbody>
            </table>

            <table className={styles.information_table}>
                <tbody>
                    <tr>
                        <td className={styles.information_table_row_header}>
                            <p style={{width:"100%", textAlign:"center", fontSize:"15px"}}>Final Remarks</p>
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.fillout_table_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm175} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item175} onChange={generic_setter(set_item175)} onBlur={(event) => {  
                                        handleRealTimeSubmit(realtimeForm175)  
                                    }}/>  
                                    <input disabled={!isEditor} type="text" name="identifier" value={"item175"} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td> 
                    </tr>
                </tbody>
            </table>


            {showModal && <div className={styles.overlay}></div>}

            {showModal &&     
                <div className={styles.modal_container}>
                    <div className={styles.close_button_container}>
                        <Image src="/icons/close-icon.png" 
                                alt="close-icon" 
                                height={15} 
                                width={15}
                                onClick={toggle_modal}
                                className={styles.close_button}
                                />
                    </div>

                    <div className={styles.form_container}>
                        <div className={styles.form_header}>
                            <h2 style={{fontSize:"18px"}}>Add person responsible for the technical validity of test reports</h2>
                            <p style={{fontSize:"14px", color:"dimgray"}}>Fill out the form to add a new record.</p>
                            <hr />
                        </div>
                        <form action={personFormAction} className={styles.form_style}>
                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} htmlFor="name">Name / Designation</label>
                                    <input disabled={!isEditor} type="text" name='name' className={styles.input_max} required/>
                                </div>
                            </div>

                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} htmlFor="type_of_report">Type of report</label>
                                    <input disabled={!isEditor} type="text" name='type_of_report' className={styles.input_max} required/>
                                </div>
                            </div>

                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} htmlFor="signed">Specify whether person signed under the heading of: analysed by, certified by, verified by, noted by, etc.:</label>
                                    <input disabled={!isEditor} type="text" name='signed' className={styles.input_max} required/>
                                </div>
                            </div>
                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} htmlFor="denr_approved">Is DENR Approved?</label>
                                    <select disabled={!isEditor} name="denr_approved" className={styles.input_max}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                </div>
                            </div>

                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} htmlFor="input_file">Attachment (optional):</label>
                                    <div className={styles.upload_button_container}>
                                        <Button 
                                            disabled={!isEditor}
                                            component="label"
                                            variant="contained"
                                            tabIndex={-1}
                                            sx={{width:"20px",
                                                "& .MuiButton-icon":{
                                                    margin:"0px"
                                                }
                                            }}
                                            startIcon={<CloudUploadIcon />}
                                        >
                                            <VisuallyHiddenInput
                                                type="file"
                                                accept=".pdf"
                                                name='input_file'
                                                onChange={fileUpload(setFile, setFileName)}
                                            />
                                        </Button>
                                        {fileName === "" && 
                                            <p className={styles.file_name}>
                                                {"upload file ..."}
                                            </p>
                                        }
                                        {fileName !== "" && 
                                            <p className={styles.file_name}>
                                                {fileName}
                                            </p>
                                        }
                                    </div>
                                </div>
                            </div>
 
                            
                            <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                            <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                            <input disabled={!isEditor} type="text" name="userId" value={user.id} hidden readOnly />
                            <hr />
                            <div className={styles.button_container}>
                                {personFormState.error && <small 
                                                                    style={{textAlign:"left", width:"100%", color:"red"}}>
                                                                        {personFormState.error}
                                                                </small>}
                                <button disabled={!isEditor} className={styles.add_button}>
                                    <SaveIcon style={{fill:"white", scale:"0.8"}}/>
                                    Save
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            }

            
            {showModalRecognized && <div className={styles.overlay}></div>}

            {showModalRecognized &&     
                <div className={styles.modal_container}>
                    <div className={styles.close_button_container}>
                        <Image src="/icons/close-icon.png" 
                                alt="close-icon" 
                                height={15} 
                                width={15}
                                onClick={toggle_modal_recognized}
                                className={styles.close_button}
                                />
                    </div>

                    <div className={styles.form_container}>
                        <div className={styles.form_header}>
                            <h2 style={{fontSize:"18px"}}>Add person recommended to be recognised by the DENR as responsible for the technical validity of test reports</h2>
                            <p style={{fontSize:"14px", color:"dimgray"}}>Fill out the form to add a new record.</p>
                            <hr />
                        </div>
                        <form action={recognizedFormAction} className={styles.form_style}>
                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} htmlFor="name">Full name</label>
                                    <input disabled={!isEditor} type="text" name='name' className={styles.input_max} required/>
                                </div>
                            </div>

                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} htmlFor="education">Educational Attainment</label>
                                    <input disabled={!isEditor} type="text" name='education' className={styles.input_max} required/>
                                </div>
                            </div>

                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} htmlFor="profession">Profession</label>
                                    <input disabled={!isEditor} type="text" name='profession' className={styles.input_max} required/>
                                </div>
                            </div>
                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} htmlFor="license">License No.</label>
                                    <input disabled={!isEditor} type="text" name='license' className={styles.input_max} required/>
                                </div>
                            </div>

                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} htmlFor="responsibility">Area/s of Responsibility</label>
                                    <input disabled={!isEditor} type="text" name='responsibility' className={styles.input_max} required/>
                                </div>
                            </div>

                            
                            <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                            <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                            <input disabled={!isEditor} type="text" name="userId" value={user.id} hidden readOnly />

                            <hr />

                            <div className={styles.button_container}>
                                {recognizedFormState.error && <small 
                                                                    style={{textAlign:"left", width:"100%", color:"red"}}>
                                                                        {recognizedFormState.error}
                                                                </small>}
                                <button disabled={!isEditor} className={styles.add_button}>
                                    <SaveIcon style={{fill:"white", scale:"0.8"}}/>
                                    Save
                                </button>
                            </div>

                        </form>
                    </div>
                    
                    
                </div>
            }


            {showModalProficiency && <div className={styles.overlay}></div>}

            {showModalProficiency &&     
                <div className={styles.modal_container}>
                    <div className={styles.close_button_container}>
                        <Image src="/icons/close-icon.png" 
                                alt="close-icon" 
                                height={15} 
                                width={15}
                                onClick={toggle_modal_proficiency}
                                className={styles.close_button}
                                />
                    </div>

                    <div className={styles.form_container}>
                        <div className={styles.form_header}>
                            <h2 style={{fontSize:"18px"}}>Add Proficiency Testing</h2>
                            <p style={{fontSize:"14px", color:"dimgray"}}>Fill out the form to add a new record.</p>
                            <hr />
                        </div>
                        <form action={proficiencyFormAction} className={styles.form_style}>
                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} htmlFor="date_from">Date from</label>
                                    <input disabled={!isEditor} type="date" name='date_from' className={styles.input_max} required/>
                                </div>
                            </div>

                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} htmlFor="date_to">Date to</label>
                                    <input disabled={!isEditor} type="date" name='date_to' className={styles.input_max} required/>
                                </div>
                            </div>

                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} htmlFor="title">Title</label>
                                    <input disabled={!isEditor} type="text" name='title' className={styles.input_max} required/>
                                </div>
                            </div>

                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} htmlFor="organizing_body">Organizing Body</label>
                                    <input disabled={!isEditor} type="text" name='organizing_body' className={styles.input_max} required/>
                                </div>
                            </div>
                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} htmlFor="matrix">Matrix</label>
                                    <input disabled={!isEditor} type="text" name='matrix' className={styles.input_max} required/>
                                </div>
                            </div>

                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} htmlFor="parameters">Parameters</label>
                                    <input disabled={!isEditor} type="text" name='parameters' className={styles.input_max} required/>
                                </div>
                            </div>

                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} htmlFor="performance">Performance</label>
                                    <select disabled={!isEditor} name="performance" className={styles.input_max}>
                                        <option value={""}>---</option>
                                        <option value={"satisfactory"}>Satisfactory</option>
                                        <option value={"questionable"}>Questionable</option>
                                        <option value={"unsatisfactory"}>Unsatisfactory</option>
                                    </select>
                                </div>
                            </div>

                            
                            <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                            <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                            <input disabled={!isEditor} type="text" name="userId" value={user.id} hidden readOnly />

                            <hr />

                            <div className={styles.button_container}>
                                {proficiencyFormState.error && <small 
                                                                    style={{textAlign:"left", width:"100%", color:"red"}}>
                                                                        {proficiencyFormState.error}
                                                                </small>}
                                <button disabled={!isEditor} className={styles.add_button}>
                                    <SaveIcon style={{fill:"white", scale:"0.8"}}/>
                                    Save
                                </button>
                            </div>

                        </form>
                    </div>
                    
                    
                </div>
            }


                



            <Snackbar open={openSnackBar} autoHideDuration={3000} onClose={handleCloseSnackBar} anchorOrigin={{vertical:"bottom", horizontal:"center"}}>
                <Alert
                    onClose={handleCloseSnackBar}
                    severity={snackBarSeverity}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {snackBarMessage}
                </Alert>
            </Snackbar>
        </div>
    )
}