// components/MyPDFDocument.js
import React from 'react';
import { Page, Text, View, Document, Image } from '@react-pdf/renderer';
import styles from './pdf_styles';
import { convertToStandardDate } from '@/app/lib/helper';
// Define styles

// PDF document component


function check_null_name(input){
    if(input === "" || input === null || input === undefined){
        return "---"
    }else{
        return input.name
    }
}
function check_null(input){
    if(input === "" || input === null || input === undefined){
        return "---"
    }else{
        return input
    }
}
const ApplicationFormPDF = ({ lab, application}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header_section} fixed>
        <Image src="/images/denr_logo.png" style={styles.header_logo}/>
        <View style={styles.header_info_container}>
            <Text style={styles.header_info}>Department of Environment and Natural Resources</Text>
            <Text style={styles.header_info_bold}>Environmental Management Bureau</Text>
            <Text style={styles.header_info_small}>DENR Compound, Visayas Avenue, Diliman, Quezon City</Text>
            <Text style={styles.header_info_small}>Tel. Nos. 4264338/ 4264339; Fax Nos. 4264335/ 4264340</Text>
        </View>
      </View>
      <View style={styles.separator} fixed></View>
      

      <View style={styles.title_container}>
        <Text style={styles.header_info_bold}>ENVIRONMENTAL LABORATORY RECOGNITION</Text>
        <Text style={styles.header_info}>Application Form</Text>
      </View>

      <View style={styles.application_form_main_container}>
        <View style={styles.table}>
            <View style={styles.tableRow}>
                <View style={styles.tableCol70}>
                    <View style={styles.tableCell}>
                        <Text style={styles.field_label}>Laboratory name:</Text>
                        <Text style={styles.field_value}>{lab.laboratoryName}</Text>
                    </View>
                </View>
                <View style={styles.tableCol30}>
                    <View style={styles.tableCell}>
                        <Text style={styles.field_label}>Date established:</Text>
                        <Text style={styles.field_value}>{convertToStandardDate(lab.dateEstablished)}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.tableRow}>
                <View style={styles.tableCol100}>
                    <View style={styles.tableCell}>
                        <Text style={styles.field_label}>Laboratory address:</Text>
                        <Text style={styles.field_value}>{lab.establishment.address}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.tableRow}>
                <View style={styles.tableCol33}>
                    <View style={styles.tableCell}>
                        <Text style={styles.field_label}>Telephone number:</Text>
                        <Text style={styles.field_value}>{lab.contactNumber}</Text>
                    </View>
                </View>
                <View style={styles.tableCol33}>
                    <View style={styles.tableCell}>
                        <Text style={styles.field_label}>Fax number:</Text>
                        <Text style={styles.field_value}>{lab.faxNumber}</Text>
                    </View>
                </View>
                <View style={styles.tableCol33}>
                    <View style={styles.tableCell}>
                        <Text style={styles.field_label}>Email address:</Text>
                        <Text style={styles.field_value}>{lab.labHeadEmail}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.tableRow}>
                <View style={styles.tableCol100}>
                    <View style={styles.tableCell}>
                        <Text style={styles.field_label}>Laboratory address:</Text>
                        <Text style={styles.field_value}>{lab.establishment.address}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.tableRow}>
                <View style={styles.tableCol33}>
                    <View style={styles.tableCell}>
                        <Text style={styles.field_label}>Laboratory head name:</Text>
                        <Text style={styles.field_value}>{lab.labHeadName}</Text>
                    </View>
                </View>
                <View style={styles.tableCol33}>
                    <View style={styles.tableCell}>
                        <Text style={styles.field_label}>Laboratory contact number:</Text>
                        <Text style={styles.field_value}>{lab.labHeadContact}</Text>
                    </View>
                </View>
                <View style={styles.tableCol33}>
                    <View style={styles.tableCell}>
                        <Text style={styles.field_label}>Laboratory head citizenship:</Text>
                        <Text style={styles.field_value}>{lab.labHeadCitizenShip}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.tableRow}>
                <View style={styles.tableCol25}>
                    <View style={styles.tableCell}>
                        <Text style={styles.field_label}>Business Permit No. (attach copy of permit):</Text>
                        <Text style={styles.field_value}>{lab.businessPermitNumber}</Text>
                    </View>
                </View>
                <View style={styles.tableCol25}>
                    <View style={styles.tableCell}>
                        <Text style={styles.field_label}>Date Issued:</Text>
                        <Text style={styles.field_value}>{convertToStandardDate(lab.businessPermitIssueDate)}</Text>
                    </View>
                </View>
                <View style={styles.tableCol25}>
                    <View style={styles.tableCell}>
                        <Text style={styles.field_label}>Place Issued:</Text>
                        <Text style={styles.field_value}>{convertToStandardDate(lab.businessPermitExpiration)}</Text>
                    </View>
                </View>
                <View style={styles.tableCol25}>
                    <View style={styles.tableCell}>
                        <Text style={styles.field_label}>Expiration Date:</Text>
                        <Text style={styles.field_value}>{lab.businessPermitPlaceOfIssuance}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.tableRow}>
                <View style={styles.tableCol100}>
                    <View style={styles.tableCell}>
                        <Text style={styles.field_label}>Tax identification number (TIN):</Text>
                        <Text style={styles.field_value}>{lab.tin}</Text>
                    </View>
                </View>
            </View>


            <View style={styles.tableRow}>
                <View style={styles.tableCol100}>
                    <View style={styles.tableCell}>
                        <Text style={styles.field_label}>Mission statement:</Text>
                        <Text style={styles.field_value}>{lab.missionStatement}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.tableRow}>
                <View style={styles.tableCol100}>
                    <View style={styles.tableCellCentered}>
                        <Text style={styles.field_label}>Scope of desired recognition</Text>
                    </View>
                </View>
            </View>

            <View style={styles.tableRow}>
                <View style={styles.tableCol25}>
                    <View style={styles.tableCell}>
                        <Text style={styles.field_label}>Type of sample/s</Text>
                    </View>
                </View>
                <View style={styles.tableCol25}>
                    <View style={styles.tableCell}>
                        <Text style={styles.field_label}>Parameter/s</Text>
                    </View>
                </View>
                <View style={styles.tableCol25}>
                    <View style={styles.tableCell}>
                        <Text style={styles.field_label}>Analytical Method</Text>
                    </View>
                </View>
                <View style={styles.tableCol25}>
                    <View style={styles.tableCell}>
                        <Text style={styles.field_label}>Reference</Text>
                    </View>
                </View>
            </View>

            {application.scope_of_recognition?.length > 0 && 
                application.scope_of_recognition.map((item, index) => (
                    <View key={index} style={styles.tableRow} wrap={true}>
                        <View style={styles.tableCol25}>
                            <View style={styles.tableCell}>
                                <Text style={styles.field_value}>{check_null_name(item.sampleType)}</Text>
                            </View>
                        </View>
                        <View style={styles.tableCol25}>
                            <View style={styles.tableCell}>
                                <Text style={styles.field_value}>{check_null_name(item.parameter)}</Text>
                            </View>
                        </View>
                        <View style={styles.tableCol25}>
                            <View style={styles.tableCell}>
                                <Text style={styles.field_value}>{check_null_name(item.sampleMethod)}</Text>
                            </View>
                        </View>
                        <View style={styles.tableCol25}>
                            <View style={styles.tableCell}>
                                <Text style={styles.field_value}>{check_null_name(item.sampleReference)}</Text>
                            </View>
                        </View>
                    </View>
                
                ))
            }

            <View style={styles.tableRow}>
                <View style={styles.tableCol100}>
                    <View style={styles.tableCellCentered}>
                        <Text style={styles.field_label}>Accreditation record of the laboratory (attach copy of accreditation certificate/s):</Text>
                    </View>
                </View>
            </View>


            <View style={styles.tableRow}>
                <View style={styles.tableCol33}>
                    <View style={styles.tableCell}>
                        <Text style={styles.field_label}>Accrediting body/ Address:</Text>
                    </View>
                </View>
                <View style={styles.tableCol33}>
                    <View style={styles.tableCell}>
                        <Text style={styles.field_label}>Nature/ scope of accreditation:</Text>
                    </View>
                </View>
                <View style={styles.tableCol33}>
                    <View style={styles.tableCell}>
                        <Text style={styles.field_label}>Expiration date:</Text>
                    </View>
                </View>
            </View>


            {lab.accreditationRecords?.length > 0 && 
                lab.accreditationRecords.map((item, index) => (
                    <View key={index} style={styles.tableRow} wrap={true}>
                        <View style={styles.tableCol33}>
                            <View style={styles.tableCell}>
                                <Text style={styles.field_value}>{check_null(item.accreditation_body)}</Text>
                            </View>
                        </View>
                        <View style={styles.tableCol33}>
                            <View style={styles.tableCell}>
                                <Text style={styles.field_value}>{check_null(item.scope)}</Text>
                            </View>
                        </View>
                        <View style={styles.tableCol33}>
                            <View style={styles.tableCell}>
                                <Text style={styles.field_value}>{check_null(convertToStandardDate(item.expiration))}</Text>
                            </View>
                        </View>
                    </View>
                
                ))
            }


            <View style={styles.tableRow}>
                <View style={styles.tableCol100}>
                    <View style={styles.tableCellCentered}>
                        <Text style={styles.field_label}>Technical and support personnel of the laboratory</Text>
                    </View>
                </View>
            </View>


            <View style={styles.tableRow}>
                <View style={styles.tableCol25}>
                    <View style={styles.tableCell}>
                        <Text style={styles.field_label}>Name</Text>
                    </View>
                </View>
                <View style={styles.tableCol25}>
                    <View style={styles.tableCell}>
                        <Text style={styles.field_label}>Highest educational attainment/License No.</Text>
                    </View>
                </View>
                <View style={styles.tableCol25}>
                    <View style={styles.tableCell}>
                        <Text style={styles.field_label}>Job title</Text>
                    </View>
                </View>
                <View style={styles.tableCol25}>
                    <View style={styles.tableCell}>
                        <Text style={styles.field_label}>Years of experience in environmental analysis/management</Text>
                    </View>
                </View>
            </View>


            {lab.personnels?.length > 0 && 
                lab.personnels.map((item, index) => (
                    <View key={index} style={styles.tableRow} wrap={true}>
                        <View style={styles.tableCol25}>
                            <View style={styles.tableCell}>
                                <Text style={styles.field_value}>{check_null(item.name)}</Text>
                            </View>
                        </View>
                        <View style={styles.tableCol25}>
                            <View style={styles.tableCell}>
                                <Text style={styles.field_value}>{check_null(item.education)}</Text>
                            </View>
                        </View>
                        <View style={styles.tableCol25}>
                            <View style={styles.tableCell}>
                                <Text style={styles.field_value}>{check_null(item.position)}</Text>
                            </View>
                        </View>
                        <View style={styles.tableCol25}>
                            <View style={styles.tableCell}>
                                <Text style={styles.field_value}>{check_null(item.yearsOfExperience)}</Text>
                            </View>
                        </View>
                    </View>
                
                ))
            }


            <View style={styles.tableRow}>
                <View style={styles.tableCol100}>
                    <View style={styles.tableCell}>
                        <Text style={styles.field_label}>Scope and nature of work of the laboratory:</Text>
                        <Text style={styles.field_value}>{lab.scopeOfWork}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.tableRow}>
                <View style={styles.tableCol100}>
                    <View style={styles.tableCell}>
                        <Text style={styles.field_label}>Geographical area currently served by the laboratory regarding acceptance of testing work (restrictions):</Text>
                        <Text style={styles.field_value}>{lab.areaServed}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.tableRow}>
                <View style={styles.tableCol100}>
                    <View style={styles.tableCell}>
                        <Text style={styles.field_label}>Categories of clients which use its services/ or whether the laboratory will accept testing work from:</Text>
                        <Text style={styles.field_value}>{lab.categoryOfClient}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.tableRow}>
                <View style={styles.tableCol100}>
                    <View style={styles.tableCell}>
                        <Text style={styles.field_label}>Other technical role / services offered by the laboratory:</Text>
                        <Text style={styles.field_value}>{lab.ServicesOffered}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.tableRow}>
                <View style={styles.tableCol100}>
                    <View style={styles.tableCell}>
                        <Text style={styles.field_label}>Laboratory test report forms (attach copy of laboratory test report forms):</Text>
                        <Text style={styles.field_value}>--See all attachments--</Text>
                    </View>
                </View>
            </View>

            <View style={styles.tableRow}>
                <View style={styles.tableCol100}>
                    <View style={styles.tableCell}>
                        <Text style={styles.field_label}>Reference literature available in the laboratory (attach list of reference literature available with complete bibliographicdescription):</Text>
                        <Text style={styles.field_value}>--See all attachments--</Text>
                    </View>
                </View>
            </View>

            <View style={styles.tableRow}>
                <View style={styles.tableCol100}>
                    <View style={styles.tableCell}>
                        <Text style={styles.field_label}>Equipment calibration and maintenance program of the laboratory (attach detailed description of equipment calibration and maintenance program of the laboratory):</Text>
                        <Text style={styles.field_value}>--See all attachments--</Text>
                    </View>
                </View>
            </View>
            
            <View style={styles.tableRow}>
                <View style={styles.tableCol100}>
                    <View style={styles.tableCell}>
                        <Text style={styles.field_label}>Quality assurance/ quality control program of the laboratory (attach detailed description of the quality assurance/quality control program of the laboratory):</Text>
                        <Text style={styles.field_value}>--See all attachments--</Text>
                    </View>
                </View>
            </View>

            <View style={styles.tableRow}>
                <View style={styles.tableCol100}>
                    <View style={styles.tableCellCentered}>
                        <Text style={styles.field_label}>Track record of the laboratory</Text>
                    </View>
                </View>
            </View>

            <View style={styles.tableRow}>
                <View style={styles.tableCol25}>
                    <View style={styles.tableCell}>
                        <Text style={styles.field_label}>Type of sample/s</Text>
                    </View>
                </View>
                <View style={styles.tableCol25}>
                    <View style={styles.tableCell}>
                        <Text style={styles.field_label}>Parameter/s</Text>
                    </View>
                </View>
                <View style={styles.tableCol25}>
                    <View style={styles.tableCell}>
                        <Text style={styles.field_label}>No. of samples analysed</Text>
                    </View>
                </View>
                <View style={styles.tableCol25}>
                    <View style={styles.tableCell}>
                        <Text style={styles.field_label}>Date covered</Text>
                    </View>
                </View>
            </View>


            {lab.trackRecords?.length > 0 && 
                lab.trackRecords.map((item, index) => (
                    <View key={index} style={styles.tableRow} wrap={true}>
                        <View style={styles.tableCol25}>
                            <View style={styles.tableCell}>
                                <Text style={styles.field_value}>{check_null_name(item.sample.sampleType)}</Text>
                            </View>
                        </View>
                        <View style={styles.tableCol25}>
                            <View style={styles.tableCell}>
                                <Text style={styles.field_value}>{check_null_name(item.sample.parameter)}</Text>
                            </View>
                        </View>
                        <View style={styles.tableCol25}>
                            <View style={styles.tableCell}>
                                <Text style={styles.field_value}>{check_null(item.numberOfSamples)}</Text>
                            </View>
                        </View>
                        <View style={styles.tableCol25}>
                            <View style={styles.tableCell}>
                                <Text style={styles.field_value}>
                                    {`${check_null(convertToStandardDate(item.dateCoveredStart))} to \n${check_null(convertToStandardDate(item.dateCoveredEnd))}`}
                                </Text>
                            </View>
                        </View>
                    </View>
                
                ))
            }


            <View style={styles.tableRow}>
                <View style={styles.tableCol100}>
                    <View style={styles.tableCell}>
                        <Text style={styles.field_label}>Floor plan of the laboratory and related facilities (attach floor plan scale (1:100)):</Text>
                        <Text style={styles.field_value}>--See all attachments--</Text>
                    </View>
                </View>
            </View>

            <View style={styles.tableRow}>
                <View style={styles.tableCol100}>
                    <View style={styles.tableCell}>
                        <Text style={styles.field_label}>Pollution control and waste management practices adopted by the laboratory (attached detailed description of the waste management practices adopted by the laboratory):</Text>
                        <Text style={styles.field_value}>--See all attachments--</Text>
                    </View>
                </View>
            </View>


        </View>
      </View>

      <View style={styles.footer} fixed>
            <Text style={styles.header_info_bold_small}>Environmental Management Bureau</Text>
            <Text style={styles.header_info_bold_small} render={({ pageNumber, totalPages }) => (
            `${pageNumber} / ${totalPages}`
        )} fixed />
      </View>
    </Page>



    <Page size="A4" style={styles.page}>
      <View style={styles.header_section} fixed>
        <Image src="/images/denr_logo.png" style={styles.header_logo}/>
        <View style={styles.header_info_container}>
            <Text style={styles.header_info}>Department of Environment and Natural Resources</Text>
            <Text style={styles.header_info_bold}>Environmental Management Bureau</Text>
            <Text style={styles.header_info_small}>DENR Compound, Visayas Avenue, Diliman, Quezon City</Text>
            <Text style={styles.header_info_small}>Tel. Nos. 4264338/ 4264339; Fax Nos. 4264335/ 4264340</Text>
        </View>
      </View>
      <View style={styles.separator} fixed></View>
        
    <View style={styles.table}>
        <View style={styles.tableRow}>
            <View style={styles.tableCol100Borderless}>
                <Text style={styles.lettter_text_margin}>{"I hereby certify to the best of my knowledge and information, under penalty of law, to the truth and"}</Text>
                <Text style={styles.lettter_text}>{"correctness of the above statement and that this application was prepared by me or under my personal jurisdiction."}</Text>
            </View>
        </View>
        <View style={styles.tableRowSpacerSmall}>
            {/* blank */}
        </View>
        <View style={styles.tableRow}>
            <View style={styles.tableCol50Borderless}>
            </View>
            <View style={styles.tableCol40Borderless}>
                <Text style={styles.field_value_centered}>_________________________________________</Text>
            </View>
        </View>
        <View style={styles.tableRow}>
            <View style={styles.tableCol50Borderless}>
            </View>
            <View style={styles.tableCol50Borderless}>
                <Text style={styles.field_value_centered}>(City/ Municipality, Province)</Text>
            </View>
        </View>
        <View style={styles.tableRowSpacerSmall}>
            {/* blank */}
        </View>
        <View style={styles.tableRow}>
            <View style={styles.tableCol50Borderless}>
            </View>
            <View style={styles.tableCol50Borderless}>
                <Text style={styles.field_value_centered}>_________________________________________</Text>
            </View>
        </View>
        <View style={styles.tableRow}>
            <View style={styles.tableCol50Borderless}>
            </View>
            <View style={styles.tableCol50Borderless}>
                <Text style={styles.field_value_centered}>(Date)</Text>
            </View>
        </View>
        <View style={styles.tableRow}>
            <View style={styles.tableCol50Borderless}>
                <Text style={styles.field_value}>Res. Cert. No  _______________________</Text>
            </View>
            <View style={styles.tableCol50Borderless}>
                {/* blank */}
            </View>
        </View>
        <View style={styles.tableRow}>
            <View style={styles.tableCol50Borderless}>
                <Text style={styles.field_value}>Issued at          _______________________</Text>
            </View>
            <View style={styles.tableCol50Borderless}>
            <Text style={styles.field_value_centered}>_________________________________________</Text>
            </View>
        </View>
        <View style={styles.tableRow}>
            <View style={styles.tableCol50Borderless}>
            <Text style={styles.field_value}>Issued on         _______________________</Text>
            </View>
            <View style={styles.tableCol50Borderless}>
            <Text style={styles.field_value_centered}>(Signature above printed name of the Head of the Laboratory)</Text>
            </View>
        </View>
        <View style={styles.tableRow}>
            <View style={styles.tableCol100Borderless}>
                <Text style={styles.field_value}>Noted by:</Text>
            </View>
        </View>

        <View style={styles.tableRow}>
            <View style={styles.tableCol50Borderless}>
                {/* blank */}
            </View>
            <View style={styles.tableCol50Borderless}>
                <Text style={styles.field_value}>Res. Cert. No  _______________________</Text>
            </View>
        </View>
        <View style={styles.tableRow}>
            <View style={styles.tableCol50Borderless}>
                <Text style={styles.field_value_centered}>_________________________________________</Text>
            </View>
            <View style={styles.tableCol50Borderless}>
                <Text style={styles.field_value}>Issued at          _______________________</Text>
            </View>
        </View>
        <View style={styles.tableRow}>
            <View style={styles.tableCol50Borderless}>
                <Text style={styles.field_value_centered}>(Signature above printed name of the Head of the Laboratory)</Text>
            </View>
            <View style={styles.tableCol50Borderless}>
                <Text style={styles.field_value}>Issued on         _______________________</Text>
            </View>
        </View>
        <View style={styles.tableRowSpacerSmall}>
            {/* blank */}
        </View>
        <View style={styles.tableRow}>
            <View style={styles.tableCol100Borderless}>
                <Text style={styles.field_value}>Date:  __________________________</Text>
            </View>
        </View>
        <View style={styles.tableRowSpacerSmall}>
            {/* blank */}
        </View>

        <View style={styles.separator_dash}></View>
        <View style={styles.tableRow}>
            <View style={styles.tableCol100Borderless}>
                <Text style={styles.title}>ACKNOWLEDGMENT</Text>
            </View>
        </View>
        <View style={styles.tableRowSpacerSmall}>
            {/* blank */}
        </View>
        <View style={styles.tableRow}>
            <View style={styles.tableCol100Borderless}>
                <Text style={styles.lettter_text_margin}>{"SUBSCRIBED AND SWORN TO before me this _______________ day of _________, affiant"}</Text>
                <Text style={styles.lettter_text}>{"exhibiting his Residence Certificate as indicated above"}</Text>
            </View>
        </View>
        <View style={styles.tableRowSpacer}>
            {/* blank */}
        </View>
        <View style={styles.tableRow}>
            <View style={styles.tableCol50Borderless}>
                <Text style={styles.field_value}>Doc. No   _______________________</Text>
            </View>
            <View style={styles.tableCol50Borderless}>
                <Text style={styles.field_value_centered}>_________________________________________</Text>
            </View>
        </View>
        <View style={styles.tableRow}>
            <View style={styles.tableCol50Borderless}>
                <Text style={styles.field_value}>Page No. _______________________</Text>
            </View>
            <View style={styles.tableCol50Borderless}>
                <Text style={styles.field_value_centered}>NOTARY PUBLIC</Text>
            </View>
        </View>
        <View style={styles.tableRow}>
            <View style={styles.tableCol50Borderless}>
                <Text style={styles.field_value}>Book No. _______________________</Text>
            </View>
            <View style={styles.tableCol50Borderless}>
                {/* blank */}
            </View>
        </View>
        <View style={styles.tableRow}>
            <View style={styles.tableCol50Borderless}>
                <Text style={styles.field_value}>Series of _______________________</Text>
            </View>
            <View style={styles.tableCol50Borderless}>
            {/* blank */}
            </View>
        </View>
        <View style={styles.tableRowSpacerSmall}>
            {/* blank */}
        </View>
    </View>
      
    </Page>
  </Document>
);

export default ApplicationFormPDF;