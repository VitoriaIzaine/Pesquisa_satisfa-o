import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialButtonTransparentHamburger from "../../public/components/MaterialButtonTransparentHamburger";
import MaterialButtonWithVioletText from "../../public/components/MaterialButtonWithVioletText";
import MaterialRadio from "../../public/components/MaterialRadio";
import MaterialToast3 from "../../public/components/MaterialToast3";
import MaterialButtonWithShadow from "../../public/components/MaterialButtonWithShadow";
import MaterialButtonWithShadow1 from "../../public/components//MaterialButtonWithShadow1";
import MaterialButtonPink from "../../public/components/MaterialButtonPink";
import styles from "./style.js"


function Questionario(props) {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <View style={styles.backNavbar}>
          <MaterialButtonTransparentHamburger
            style={styles.bTNicon}
          ></MaterialButtonTransparentHamburger>
          <View style={styles.bTNsobreRow}>
            <MaterialButtonWithVioletText
              caption="Sobre"
              style={styles.bTNsobre}
            ></MaterialButtonWithVioletText>
            <MaterialButtonWithVioletText
              caption="Formulário"
              style={styles.bTNformulario}
            ></MaterialButtonWithVioletText>
          </View>
        </View>
      </View>
      <View style={styles.q1Stack}>
        <View style={styles.q1}>
          <Text style={styles.textQ1}>
            1. Limpeza e conservação da sala de aula e {"\n"}da oficina
          </Text>
          <View style={styles.importanciaQ1}>
            <Text style={styles.textImportanciaQ1}>Nível de Impotância</Text>
            <View style={styles.altaQ1}>
              <View style={styles.rBalta1Row}>
                <MaterialRadio style={styles.rBalta1}></MaterialRadio>
                <Text style={styles.textAlta1}>Alta</Text>
              </View>
            </View>
            <View style={styles.mediaQ1}>
              <View style={styles.rBmedia1Row}>
                <MaterialRadio style={styles.rBmedia1}></MaterialRadio>
                <Text style={styles.textMedia1}>Média</Text>
              </View>
            </View>
            <View style={styles.baixaQ1}>
              <View style={styles.rBbaixa1Row}>
                <MaterialRadio style={styles.rBbaixa1}></MaterialRadio>
                <Text style={styles.textBaixa1}>Baixa</Text>
              </View>
            </View>
          </View>
          <View style={styles.satisfacaoQ1}>
            <Text style={styles.textSatisfacaoQ1}>Nível de Satisfação</Text>
            <View style={styles.otimoQ1}>
              <View style={styles.rBotimo1Row}>
                <MaterialRadio style={styles.rBotimo1}></MaterialRadio>
                <Text style={styles.textOtimo1}>Ótimo</Text>
              </View>
            </View>
            <View style={styles.bomQ1}>
              <View style={styles.rBbom1Row}>
                <MaterialRadio style={styles.rBbom1}></MaterialRadio>
                <Text style={styles.textBom1}>Bom</Text>
              </View>
            </View>
            <View style={styles.regularQ1}>
              <View style={styles.rBregular1Row}>
                <MaterialRadio style={styles.rBregular1}></MaterialRadio>
                <Text style={styles.textRegular1}>Regular</Text>
              </View>
            </View>
            <View style={styles.ruimQ1}>
              <View style={styles.rBruim1Row}>
                <MaterialRadio style={styles.rBruim1}></MaterialRadio>
                <Text style={styles.textRuim1}>Ruim</Text>
              </View>
            </View>
            <View style={styles.aplicaQ1}>
              <View style={styles.rBaplica1Row}>
                <MaterialRadio style={styles.rBaplica1}></MaterialRadio>
                <Text style={styles.textAplica1}>Não se aplica</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.q2}>
          <Text style={styles.textQ2}>
            2. Disponibilidade de equipamentos, máquinas e {"\n"}ferramentas
            para a realização do curso
          </Text>
          <View style={styles.importanciaQ2}>
            <Text style={styles.textImportanciaQ2}>Nível de Impotância</Text>
            <View style={styles.altaQ2}>
              <View style={styles.rBalta2Row}>
                <MaterialRadio style={styles.rBalta2}></MaterialRadio>
                <Text style={styles.textAlta2}>Alta</Text>
              </View>
            </View>
            <View style={styles.mediaQ2}>
              <View style={styles.rBmedia2Row}>
                <MaterialRadio style={styles.rBmedia2}></MaterialRadio>
                <Text style={styles.textMedia2}>Média</Text>
              </View>
            </View>
            <View style={styles.baixaQ2}>
              <View style={styles.rBbaixa2Row}>
                <MaterialRadio style={styles.rBbaixa2}></MaterialRadio>
                <Text style={styles.textBaixa2}>Baixa</Text>
              </View>
            </View>
          </View>
          <View style={styles.satisfacaoQ2}>
            <Text style={styles.textSatisfacaoQ2}>Nível de Satisfação</Text>
            <View style={styles.otimoQ2}>
              <View style={styles.rBotimo2Row}>
                <MaterialRadio style={styles.rBotimo2}></MaterialRadio>
                <Text style={styles.textOtimo2}>Ótimo</Text>
              </View>
            </View>
            <View style={styles.bomQ2}>
              <View style={styles.rBbom2Row}>
                <MaterialRadio style={styles.rBbom2}></MaterialRadio>
                <Text style={styles.textBom2}>Bom</Text>
              </View>
            </View>
            <View style={styles.regularQ2}>
              <View style={styles.rBregular2Row}>
                <MaterialRadio style={styles.rBregular2}></MaterialRadio>
                <Text style={styles.textRegular2}>Regular</Text>
              </View>
            </View>
            <View style={styles.ruimQ2}>
              <View style={styles.rBruim2Row}>
                <MaterialRadio style={styles.rBruim2}></MaterialRadio>
                <Text style={styles.textRuim2}>Ruim</Text>
              </View>
            </View>
            <View style={styles.aplicaQ2}>
              <View style={styles.rBaplica2Row}>
                <MaterialRadio style={styles.rBaplica2}></MaterialRadio>
                <Text style={styles.textAplica2}>Não se aplica</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.q3}>
        <Text style={styles.textQ3}>4. Cumprimento do horário das aulas</Text>
        <View style={styles.importanciaQ3}>
          <Text style={styles.textImportanciaQ3}>Nível de Impotância</Text>
          <View style={styles.altaQ3}>
            <View style={styles.rBalta3Row}>
              <MaterialRadio style={styles.rBalta3}></MaterialRadio>
              <Text style={styles.textAlta3}>Alta</Text>
            </View>
          </View>
          <View style={styles.mediaQ3}>
            <View style={styles.rBmedia3Row}>
              <MaterialRadio style={styles.rBmedia3}></MaterialRadio>
              <Text style={styles.textMedia3}>Média</Text>
            </View>
          </View>
          <View style={styles.baixaQ3}>
            <View style={styles.rBbaixa3Row}>
              <MaterialRadio style={styles.rBbaixa3}></MaterialRadio>
              <Text style={styles.textBaixa3}>Baixa</Text>
            </View>
          </View>
        </View>
        <View style={styles.satisfacaoQ3}>
          <Text style={styles.textSatisfacaoQ3}>Nível de Satisfação</Text>
          <View style={styles.otimoQ3}>
            <View style={styles.rBotimo3Row}>
              <MaterialRadio style={styles.rBotimo3}></MaterialRadio>
              <Text style={styles.textOtimo3}>Ótimo</Text>
            </View>
          </View>
          <View style={styles.bomQ3}>
            <View style={styles.rBbom3Row}>
              <MaterialRadio style={styles.rBbom3}></MaterialRadio>
              <Text style={styles.textBom3}>Bom</Text>
            </View>
          </View>
          <View style={styles.regularQ3}>
            <View style={styles.rBregular3Row}>
              <MaterialRadio style={styles.rBregular3}></MaterialRadio>
              <Text style={styles.textRegular3}>Regular</Text>
            </View>
          </View>
          <View style={styles.ruimQ3}>
            <View style={styles.rBruim3Row}>
              <MaterialRadio style={styles.rBruim3}></MaterialRadio>
              <Text style={styles.textRuim3}>Ruim</Text>
            </View>
          </View>
          <View style={styles.aplicaQ3}>
            <View style={styles.rBaplica3Row}>
              <MaterialRadio style={styles.rBaplica3}></MaterialRadio>
              <Text style={styles.textAplica3}>Não se aplica</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.q4}>
        <Text style={styles.textQ4}>
          3. Qualidade de apostilas, livros e textos, quanto {"\n"}a impressão e
          adequação da informação
        </Text>
        <View style={styles.importanciaQ4}>
          <Text style={styles.textImportanciaQ4}>Nível de Impotância</Text>
          <View style={styles.altaQ4}>
            <View style={styles.rBalta4Row}>
              <MaterialRadio style={styles.rBalta4}></MaterialRadio>
              <Text style={styles.textAlta4}>Alta</Text>
            </View>
          </View>
          <View style={styles.mediaQ4}>
            <View style={styles.rBmedia4Row}>
              <MaterialRadio style={styles.rBmedia4}></MaterialRadio>
              <Text style={styles.textMedia4}>Média</Text>
            </View>
          </View>
          <View style={styles.baixaQ4}>
            <View style={styles.rBbaixa4Row}>
              <MaterialRadio style={styles.rBbaixa4}></MaterialRadio>
              <Text style={styles.textBaixa4}>Baixa</Text>
            </View>
          </View>
        </View>
        <View style={styles.satisfacaoQ4}>
          <Text style={styles.textSatisfacaoQ4}>Nível de Satisfação</Text>
          <View style={styles.otimoQ4}>
            <View style={styles.rBotimo4Row}>
              <MaterialRadio style={styles.rBotimo4}></MaterialRadio>
              <Text style={styles.textOtimo4}>Ótimo</Text>
            </View>
          </View>
          <View style={styles.bomQ4}>
            <View style={styles.rBbom4Row}>
              <MaterialRadio style={styles.rBbom4}></MaterialRadio>
              <Text style={styles.textBom4}>Bom</Text>
            </View>
          </View>
          <View style={styles.regularQ4}>
            <View style={styles.rBregular4Row}>
              <MaterialRadio style={styles.rBregular4}></MaterialRadio>
              <Text style={styles.textRegular4}>Regular</Text>
            </View>
          </View>
          <View style={styles.ruimQ4}>
            <View style={styles.rBruim4Row}>
              <MaterialRadio style={styles.rBruim4}></MaterialRadio>
              <Text style={styles.textRuim4}>Ruim</Text>
            </View>
          </View>
          <View style={styles.aplicaQ4}>
            <View style={styles.rBaplica4Row}>
              <MaterialRadio style={styles.rBaplica4}></MaterialRadio>
              <Text style={styles.textAplica4}>Não se aplica</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.q5}>
        <Text style={styles.textQ5}>
          5. Cumprimento dos objetivos propostos pelo {"\n"}curso
        </Text>
        <View style={styles.importanciaQ5}>
          <Text style={styles.textImportanciaQ5}>Nível de Impotância</Text>
          <View style={styles.altaQ5}>
            <View style={styles.rBalta5Row}>
              <MaterialRadio style={styles.rBalta5}></MaterialRadio>
              <Text style={styles.textAlta5}>Alta</Text>
            </View>
          </View>
          <View style={styles.mediaQ5}>
            <View style={styles.rBmedia5Row}>
              <MaterialRadio style={styles.rBmedia5}></MaterialRadio>
              <Text style={styles.textMedia5}>Média</Text>
            </View>
          </View>
          <View style={styles.baixaQ5}>
            <View style={styles.rBbaixa5Row}>
              <MaterialRadio style={styles.rBbaixa5}></MaterialRadio>
              <Text style={styles.textBaixa5}>Baixa</Text>
            </View>
          </View>
        </View>
        <View style={styles.satisfacaoQ5}>
          <Text style={styles.textSatisfacaoQ5}>Nível de Satisfação</Text>
          <View style={styles.otimoQ5}>
            <View style={styles.rBotimo5Row}>
              <MaterialRadio style={styles.rBotimo5}></MaterialRadio>
              <Text style={styles.textOtimo5}>Ótimo</Text>
            </View>
          </View>
          <View style={styles.bomQ5}>
            <View style={styles.rBbom5Row}>
              <MaterialRadio style={styles.rBbom5}></MaterialRadio>
              <Text style={styles.textBom5}>Bom</Text>
            </View>
          </View>
          <View style={styles.regularQ5}>
            <View style={styles.rBregular5Row}>
              <MaterialRadio style={styles.rBregular5}></MaterialRadio>
              <Text style={styles.textRegular5}>Regular</Text>
            </View>
          </View>
          <View style={styles.ruimQ5}>
            <View style={styles.rBruim5Row}>
              <MaterialRadio style={styles.rBruim5}></MaterialRadio>
              <Text style={styles.textRuim5}>Ruim</Text>
            </View>
          </View>
          <View style={styles.aplicaQ5}>
            <View style={styles.rBaplica5Row}>
              <MaterialRadio style={styles.rBaplica5}></MaterialRadio>
              <Text style={styles.textAplica5}>Não se aplica</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.q6}>
        <Text style={styles.textQ6}>
          6. Preocupação do docente com o aproveitamento {"\n"}dos alunos
        </Text>
        <View style={styles.importanciaQ6}>
          <Text style={styles.textImportanciaQ6}>Nível de Impotância</Text>
          <View style={styles.altaQ6}>
            <View style={styles.rBalta6Row}>
              <MaterialRadio style={styles.rBalta6}></MaterialRadio>
              <Text style={styles.textAlta6}>Alta</Text>
            </View>
          </View>
          <View style={styles.mediaQ6}>
            <View style={styles.rBmedia6Row}>
              <MaterialRadio style={styles.rBmedia6}></MaterialRadio>
              <Text style={styles.textMedia6}>Média</Text>
            </View>
          </View>
          <View style={styles.baixaQ6}>
            <View style={styles.rBbaixa6Row}>
              <MaterialRadio style={styles.rBbaixa6}></MaterialRadio>
              <Text style={styles.textBaixa6}>Baixa</Text>
            </View>
          </View>
        </View>
        <View style={styles.satisfacaoQ6}>
          <Text style={styles.textSatisfacaoQ6}>Nível de Satisfação</Text>
          <View style={styles.otimoQ6}>
            <View style={styles.rBotimo6Row}>
              <MaterialRadio style={styles.rBotimo6}></MaterialRadio>
              <Text style={styles.textOtimo6}>Ótimo</Text>
            </View>
          </View>
          <View style={styles.bomQ6}>
            <View style={styles.rBbom6Row}>
              <MaterialRadio style={styles.rBbom6}></MaterialRadio>
              <Text style={styles.textBom6}>Bom</Text>
            </View>
          </View>
          <View style={styles.regularQ6}>
            <View style={styles.rBregular6Row}>
              <MaterialRadio style={styles.rBregular6}></MaterialRadio>
              <Text style={styles.textRegular6}>Regular</Text>
            </View>
          </View>
          <View style={styles.ruimQ6}>
            <View style={styles.rBruim6Row}>
              <MaterialRadio style={styles.rBruim6}></MaterialRadio>
              <Text style={styles.textRuim6}>Ruim</Text>
            </View>
          </View>
          <View style={styles.aplicaQ6}>
            <View style={styles.rBaplica6Row}>
              <MaterialRadio style={styles.rBaplica6}></MaterialRadio>
              <Text style={styles.textAplica6}>Não se aplica</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.q7}>
        <Text style={styles.textQ7}>
          7. Domínio do docente sobre os assuntos tratados
        </Text>
        <View style={styles.importanciaQ7}>
          <Text style={styles.textImportanciaQ7}>Nível de Impotância</Text>
          <View style={styles.altaQ7}>
            <View style={styles.rBalta7Row}>
              <MaterialRadio style={styles.rBalta7}></MaterialRadio>
              <Text style={styles.textAlta7}>Alta</Text>
            </View>
          </View>
          <View style={styles.mediaQ7}>
            <View style={styles.rBmedia7Row}>
              <MaterialRadio style={styles.rBmedia7}></MaterialRadio>
              <Text style={styles.textMedia7}>Média</Text>
            </View>
          </View>
          <View style={styles.baixaQ7}>
            <View style={styles.rBbaixa7Row}>
              <MaterialRadio style={styles.rBbaixa7}></MaterialRadio>
              <Text style={styles.textBaixa7}>Baixa</Text>
            </View>
          </View>
        </View>
        <View style={styles.satisfacaoQ7}>
          <Text style={styles.textSatisfacaoQ7}>Nível de Satisfação</Text>
          <View style={styles.otimoQ7}>
            <View style={styles.rBotimo7Row}>
              <MaterialRadio style={styles.rBotimo7}></MaterialRadio>
              <Text style={styles.textOtimo7}>Ótimo</Text>
            </View>
          </View>
          <View style={styles.bomQ7}>
            <View style={styles.rBbom7Row}>
              <MaterialRadio style={styles.rBbom7}></MaterialRadio>
              <Text style={styles.textBom7}>Bom</Text>
            </View>
          </View>
          <View style={styles.regularQ7}>
            <View style={styles.rBregular7Row}>
              <MaterialRadio style={styles.rBregular7}></MaterialRadio>
              <Text style={styles.textRegular7}>Regular</Text>
            </View>
          </View>
          <View style={styles.ruimQ7}>
            <View style={styles.rBruim7Row}>
              <MaterialRadio style={styles.rBruim7}></MaterialRadio>
              <Text style={styles.textRuim7}>Ruim</Text>
            </View>
          </View>
          <View style={styles.aplicaQ7}>
            <View style={styles.rBaplica7Row}>
              <MaterialRadio style={styles.rBaplica7}></MaterialRadio>
              <Text style={styles.textAplica7}>Não se aplica</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.q8}>
        <Text style={styles.textQ8}>
          8. O aprendizado, na teoria e na pratica, em relação {"\n"}ao esperado
        </Text>
        <View style={styles.importanciaQ8}>
          <Text style={styles.textImportanciaQ8}>Nível de Impotância</Text>
          <View style={styles.altaQ8}>
            <View style={styles.rBalta8Row}>
              <MaterialRadio style={styles.rBalta8}></MaterialRadio>
              <Text style={styles.textAlta8}>Alta</Text>
            </View>
          </View>
          <View style={styles.mediaQ8}>
            <View style={styles.rBmedia8Row}>
              <MaterialRadio style={styles.rBmedia8}></MaterialRadio>
              <Text style={styles.textMedia8}>Média</Text>
            </View>
          </View>
          <View style={styles.baixaQ8}>
            <View style={styles.rBbaixa8Row}>
              <MaterialRadio style={styles.rBbaixa8}></MaterialRadio>
              <Text style={styles.textBaixa8}>Baixa</Text>
            </View>
          </View>
        </View>
        <View style={styles.satisfacaoQ8}>
          <Text style={styles.textSatisfacaoQ8}>Nível de Satisfação</Text>
          <View style={styles.otimoQ8}>
            <View style={styles.rBotimo8Row}>
              <MaterialRadio style={styles.rBotimo8}></MaterialRadio>
              <Text style={styles.textOtimo8}>Ótimo</Text>
            </View>
          </View>
          <View style={styles.bomQ8}>
            <View style={styles.rBbom8Row}>
              <MaterialRadio style={styles.rBbom8}></MaterialRadio>
              <Text style={styles.textBom8}>Bom</Text>
            </View>
          </View>
          <View style={styles.regularQ8}>
            <View style={styles.rBregular8Row}>
              <MaterialRadio style={styles.rBregular8}></MaterialRadio>
              <Text style={styles.textRegular8}>Regular</Text>
            </View>
          </View>
          <View style={styles.ruimQ8}>
            <View style={styles.rBruim8Row}>
              <MaterialRadio style={styles.rBruim8}></MaterialRadio>
              <Text style={styles.textRuim8}>Ruim</Text>
            </View>
          </View>
          <View style={styles.aplicaQ8}>
            <View style={styles.rBaplica8Row}>
              <MaterialRadio style={styles.rBaplica8}></MaterialRadio>
              <Text style={styles.textAplica8}>Não se aplica</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.q9}>
        <Text style={styles.textQ9}>
          9. Conteudo do curso, em relação as espectativas
        </Text>
        <View style={styles.importanciaQ9}>
          <Text style={styles.textImportanciaQ9}>Nível de Impotância</Text>
          <View style={styles.altaQ9}>
            <View style={styles.rBalta9Row}>
              <MaterialRadio style={styles.rBalta9}></MaterialRadio>
              <Text style={styles.textAlta9}>Alta</Text>
            </View>
          </View>
          <View style={styles.mediaQ9}>
            <View style={styles.rBmedia9Row}>
              <MaterialRadio style={styles.rBmedia9}></MaterialRadio>
              <Text style={styles.textMedia9}>Média</Text>
            </View>
          </View>
          <View style={styles.baixaQ9}>
            <View style={styles.rBbaixa9Row}>
              <MaterialRadio style={styles.rBbaixa9}></MaterialRadio>
              <Text style={styles.textBaixa9}>Baixa</Text>
            </View>
          </View>
        </View>
        <View style={styles.satisfacaoQ9}>
          <Text style={styles.textSatisfacaoQ9}>Nível de Satisfação</Text>
          <View style={styles.otimoQ9}>
            <View style={styles.rBotimo9Row}>
              <MaterialRadio style={styles.rBotimo9}></MaterialRadio>
              <Text style={styles.textOtimo9}>Ótimo</Text>
            </View>
          </View>
          <View style={styles.bomQ9}>
            <View style={styles.rBbom9Row}>
              <MaterialRadio style={styles.rBbom9}></MaterialRadio>
              <Text style={styles.textBom9}>Bom</Text>
            </View>
          </View>
          <View style={styles.regularQ9}>
            <View style={styles.rBregular9Row}>
              <MaterialRadio style={styles.rBregular9}></MaterialRadio>
              <Text style={styles.textRegular9}>Regular</Text>
            </View>
          </View>
          <View style={styles.ruimQ9}>
            <View style={styles.rBruim9Row}>
              <MaterialRadio style={styles.rBruim9}></MaterialRadio>
              <Text style={styles.textRuim9}>Ruim</Text>
            </View>
          </View>
          <View style={styles.aplicaQ9}>
            <View style={styles.rBaplica9Row}>
              <MaterialRadio style={styles.rBaplica9}></MaterialRadio>
              <Text style={styles.textAplica9}>Não se aplica</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.q10}>
        <Text style={styles.textQ10}>
          10. Atendimento da recpeção / secretaria da escola
        </Text>
        <View style={styles.importanciaQ10}>
          <Text style={styles.textImportanciaQ10}>Nível de Impotância</Text>
          <View style={styles.altaQ10}>
            <View style={styles.rBalta10Row}>
              <MaterialRadio style={styles.rBalta10}></MaterialRadio>
              <Text style={styles.textAlta10}>Alta</Text>
            </View>
          </View>
          <View style={styles.mediaQ10}>
            <View style={styles.rBmedia10Row}>
              <MaterialRadio style={styles.rBmedia10}></MaterialRadio>
              <Text style={styles.textMedia10}>Média</Text>
            </View>
          </View>
          <View style={styles.baixaQ10}>
            <View style={styles.rBbaixa10Row}>
              <MaterialRadio style={styles.rBbaixa10}></MaterialRadio>
              <Text style={styles.textBaixa10}>Baixa</Text>
            </View>
          </View>
        </View>
        <View style={styles.satisfacaoQ10}>
          <Text style={styles.textSatisfacaoQ10}>Nível de Satisfação</Text>
          <View style={styles.otimoQ10}>
            <View style={styles.rBotimo10Row}>
              <MaterialRadio style={styles.rBotimo10}></MaterialRadio>
              <Text style={styles.textOtimo10}>Ótimo</Text>
            </View>
          </View>
          <View style={styles.bomQ10}>
            <View style={styles.rBbom10Row}>
              <MaterialRadio style={styles.rBbom10}></MaterialRadio>
              <Text style={styles.textBom10}>Bom</Text>
            </View>
          </View>
          <View style={styles.regularQ10}>
            <View style={styles.rBregular10Row}>
              <MaterialRadio style={styles.rBregular10}></MaterialRadio>
              <Text style={styles.textRegular10}>Regular</Text>
            </View>
          </View>
          <View style={styles.ruimQ10}>
            <View style={styles.rBruim10Row}>
              <MaterialRadio style={styles.rBruim10}></MaterialRadio>
              <Text style={styles.textRuim10}>Ruim</Text>
            </View>
          </View>
          <View style={styles.aplicaQ10}>
            <View style={styles.rBaplica10Row}>
              <MaterialRadio style={styles.rBaplica10}></MaterialRadio>
              <Text style={styles.textAplica10}>Não se aplica</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.q11}>
        <Text style={styles.textQ11}>11. Atendimento telefônico da escola</Text>
        <View style={styles.importanciaQ11}>
          <Text style={styles.textImportanciaQ11}>Nível de Impotância</Text>
          <View style={styles.altaQ11}>
            <View style={styles.rBalta11Row}>
              <MaterialRadio style={styles.rBalta11}></MaterialRadio>
              <Text style={styles.textAlta11}>Alta</Text>
            </View>
          </View>
          <View style={styles.mediaQ11}>
            <View style={styles.rBmedia11Row}>
              <MaterialRadio style={styles.rBmedia11}></MaterialRadio>
              <Text style={styles.textMedia11}>Média</Text>
            </View>
          </View>
          <View style={styles.baixaQ11}>
            <View style={styles.rBbaixa11Row}>
              <MaterialRadio style={styles.rBbaixa11}></MaterialRadio>
              <Text style={styles.textBaixa11}>Baixa</Text>
            </View>
          </View>
        </View>
        <View style={styles.satisfacaoQ11}>
          <Text style={styles.textSatisfacaoQ11}>Nível de Satisfação</Text>
          <View style={styles.otimoQ11}>
            <View style={styles.rBotimo11Row}>
              <MaterialRadio style={styles.rBotimo11}></MaterialRadio>
              <Text style={styles.textOtimo11}>Ótimo</Text>
            </View>
          </View>
          <View style={styles.bomQ11}>
            <View style={styles.rBbom11Row}>
              <MaterialRadio style={styles.rBbom11}></MaterialRadio>
              <Text style={styles.textBom11}>Bom</Text>
            </View>
          </View>
          <View style={styles.regularQ11}>
            <View style={styles.rBregular11Row}>
              <MaterialRadio style={styles.rBregular11}></MaterialRadio>
              <Text style={styles.textRegular11}>Regular</Text>
            </View>
          </View>
          <View style={styles.ruimQ11}>
            <View style={styles.rBruim11Row}>
              <MaterialRadio style={styles.rBruim11}></MaterialRadio>
              <Text style={styles.textRuim11}>Ruim</Text>
            </View>
          </View>
          <View style={styles.aplicaQ11}>
            <View style={styles.rBaplica11Row}>
              <MaterialRadio style={styles.rBaplica11}></MaterialRadio>
              <Text style={styles.textAplica11}>Não se aplica</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.q12}>
        <Text style={styles.textQ12}>
          12. Atendimento da cantina / lanchonete
        </Text>
        <View style={styles.importanciaQ12}>
          <Text style={styles.textImportanciaQ12}>Nível de Impotância</Text>
          <View style={styles.altaQ12}>
            <View style={styles.rBalta12Row}>
              <MaterialRadio style={styles.rBalta12}></MaterialRadio>
              <Text style={styles.textAlta12}>Alta</Text>
            </View>
          </View>
          <View style={styles.mediaQ12}>
            <View style={styles.rBmedia12Row}>
              <MaterialRadio style={styles.rBmedia12}></MaterialRadio>
              <Text style={styles.textMedia12}>Média</Text>
            </View>
          </View>
          <View style={styles.baixaQ12}>
            <View style={styles.rBbaixa12Row}>
              <MaterialRadio style={styles.rBbaixa12}></MaterialRadio>
              <Text style={styles.textBaixa12}>Baixa</Text>
            </View>
          </View>
        </View>
        <View style={styles.satisfacaoQ12}>
          <Text style={styles.textSatisfacaoQ12}>Nível de Satisfação</Text>
          <View style={styles.otimoQ12}>
            <View style={styles.rBotimo12Row}>
              <MaterialRadio style={styles.rBotimo12}></MaterialRadio>
              <Text style={styles.textOtimo12}>Ótimo</Text>
            </View>
          </View>
          <View style={styles.bomQ12}>
            <View style={styles.rBbom12Row}>
              <MaterialRadio style={styles.rBbom12}></MaterialRadio>
              <Text style={styles.textBom12}>Bom</Text>
            </View>
          </View>
          <View style={styles.regularQ12}>
            <View style={styles.rBregular12Row}>
              <MaterialRadio style={styles.rBregular12}></MaterialRadio>
              <Text style={styles.textRegular12}>Regular</Text>
            </View>
          </View>
          <View style={styles.ruimQ12}>
            <View style={styles.rBruim12Row}>
              <MaterialRadio style={styles.rBruim12}></MaterialRadio>
              <Text style={styles.textRuim12}>Ruim</Text>
            </View>
          </View>
          <View style={styles.aplicaQ12}>
            <View style={styles.rBaplica12Row}>
              <MaterialRadio style={styles.rBaplica12}></MaterialRadio>
              <Text style={styles.textAplica12}>Não se aplica</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.q13}>
        <Text style={styles.textQ13}>13. Atendimento da biblioteca</Text>
        <View style={styles.importanciaQ13}>
          <Text style={styles.textImportanciaQ13}>Nível de Impotância</Text>
          <View style={styles.altaQ13}>
            <View style={styles.rBalta13Row}>
              <MaterialRadio style={styles.rBalta13}></MaterialRadio>
              <Text style={styles.textAlta13}>Alta</Text>
            </View>
          </View>
          <View style={styles.mediaQ13}>
            <View style={styles.rBmedia13Row}>
              <MaterialRadio style={styles.rBmedia13}></MaterialRadio>
              <Text style={styles.textMedia13}>Média</Text>
            </View>
          </View>
          <View style={styles.baixaQ13}>
            <View style={styles.rBbaixa13Row}>
              <MaterialRadio style={styles.rBbaixa13}></MaterialRadio>
              <Text style={styles.textBaixa13}>Baixa</Text>
            </View>
          </View>
        </View>
        <View style={styles.satisfacaoQ13}>
          <Text style={styles.textSatisfacaoQ13}>Nível de Satisfação</Text>
          <View style={styles.otimoQ13}>
            <View style={styles.rBotimo13Row}>
              <MaterialRadio style={styles.rBotimo13}></MaterialRadio>
              <Text style={styles.textOtimo13}>Ótimo</Text>
            </View>
          </View>
          <View style={styles.bomQ13}>
            <View style={styles.rBbom13Row}>
              <MaterialRadio style={styles.rBbom13}></MaterialRadio>
              <Text style={styles.textBom13}>Bom</Text>
            </View>
          </View>
          <View style={styles.regularQ13}>
            <View style={styles.rBregular13Row}>
              <MaterialRadio style={styles.rBregular13}></MaterialRadio>
              <Text style={styles.textRegular13}>Regular</Text>
            </View>
          </View>
          <View style={styles.ruimQ13}>
            <View style={styles.rBruim13Row}>
              <MaterialRadio style={styles.rBruim13}></MaterialRadio>
              <Text style={styles.textRuim13}>Ruim</Text>
            </View>
          </View>
          <View style={styles.aplicaQ13}>
            <View style={styles.rBaplica13Row}>
              <MaterialRadio style={styles.rBaplica13}></MaterialRadio>
              <Text style={styles.textAplica13}>Não se aplica</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.coment}>
        <Text style={styles.textComent}>
          Caso deseje, insira abaixo comentários, {"\n"}reclamações ou sugestões
        </Text>
        <MaterialToast3 style={styles.caixaTextComent}></MaterialToast3>
      </View>
      <View style={styles.anon}>
        <Text style={styles.textAnon}>
          Deseja enviar seu formulário anonimamente?
        </Text>
        <View style={styles.sim}>
          <View style={styles.rBsimRow}>
            <MaterialRadio style={styles.rBsim}></MaterialRadio>
            <Text style={styles.textSim}>Sim</Text>
          </View>
        </View>
        <View style={styles.nao}>
          <View style={styles.rBnaoRow}>
            <MaterialRadio style={styles.rBnao}></MaterialRadio>
            <Text style={styles.textNao}>Não</Text>
          </View>
        </View>
      </View>
      <View style={styles.materialButtonWithShadowRow}>
        <MaterialButtonWithShadow
          style={styles.materialButtonWithShadow}
        ></MaterialButtonWithShadow>
        <MaterialButtonWithShadow1
          style={styles.materialButtonWithShadow1}
        ></MaterialButtonWithShadow1>
      </View>
    </View>
  );
}


export default Questionario;
