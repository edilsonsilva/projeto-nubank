import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";
import { styles } from "./css/Styles";
import {
  Feather,
  Ionicons,
  Octicons,
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.screen}>
      <ScrollView horizontal={false} style={{ flex: 1 }}>
        <View style={styles.header}>
          <View style={styles.headericons}>
            <View>
              <Feather
                name="user"
                size={32}
                color="#fff"
                style={styles.headericonuser}
              />
            </View>

            <View style={styles.headericonsright}>
              <Ionicons name="md-eye-outline" size={28} color="#fff" />
              <Octicons name="question" size={23} color="#fff" />
              <MaterialCommunityIcons
                name="email-plus-outline"
                size={23}
                color="#fff"
              />
            </View>
          </View>
          <Text style={styles.txtuser}>Olá, Gabriela!</Text>
        </View>

        <View style={styles.account}>
          <View style={styles.accountline}>
            <Text style={styles.txtaccount}>Conta</Text>
            <Ionicons name="ios-chevron-forward" size={23} color="#000" />
          </View>
          <Text style={styles.txtvalue}>R$ 50,32</Text>
        </View>

        <ScrollView horizontal={true}>
          <View style={styles.nav}>
            <View style={styles.navitem}>
              <AntDesign
                name="antdesign"
                size={32}
                color="#000"
                style={styles.navitemicon}
              />
              <Text>Pix</Text>
            </View>

            <View style={styles.navitem}>
              <AntDesign
                name="barcode"
                size={32}
                color="#000"
                style={styles.navitemicon}
              />
              <Text>Pagar</Text>
            </View>

            <View style={styles.navitem}>
              <MaterialCommunityIcons
                name="cash-plus"
                size={24}
                color="black"
                style={styles.navitemicon}
              />
              <Text>Transferir</Text>
            </View>

            <View style={styles.navitem}>
              <Octicons
                name="desktop-download"
                size={24}
                color="black"
                style={styles.navitemicon}
              />
              <Text>Transferir</Text>
            </View>

            <View style={styles.navitem}>
              <FontAwesome5
                name="file-invoice-dollar"
                size={24}
                color="black"
                style={styles.navitemicon}
              />
              <Text>Cobrar</Text>
            </View>

            <View style={styles.navitem}>
              <Ionicons
                name="stats-chart"
                size={24}
                color="black"
                style={styles.navitemicon}
              />
              <Text>Investir</Text>
            </View>

            <View style={styles.navitem}>
              <AntDesign
                name="heart"
                size={24}
                color="black"
                style={styles.navitemicon}
              />
              <Text>Doação</Text>
            </View>

            <View style={styles.navitem}>
              <Ionicons
                name="globe-outline"
                size={24}
                color="black"
                style={styles.navitemicon}
              />
              <Text>Trans. Inter.</Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles.card}>
          <MaterialCommunityIcons
            name="credit-card-multiple-outline"
            size={24}
            color="#000"
          />
          <Text style={styles.txtcard}>Meus cartões</Text>
        </View>

        <View style={styles.message}>
          <ScrollView horizontal={true} style={styles.scrollmsg}>
            <View style={styles.cxmsg}>
              <Text style={styles.txtmsg}>
                E você, o que vai fazer com o seu pedacinho? Decida agora!
              </Text>
            </View>

            <View style={styles.cxmsg}>
              <Text style={styles.txtmsg}>
                E você, o que vai fazer com o seu pedacinho? Decida agora!
              </Text>
            </View>

            <View style={styles.cxmsg}>
              <Text style={styles.txtmsg}>
                E você, o que vai fazer com o seu pedacinho? Decida agora!
              </Text>
            </View>
          </ScrollView>
        </View>

        <View style={styles.account}>
          <View style={styles.accountline}>
            <Text style={styles.txtaccount}>Cartão de Crédito</Text>
            <Ionicons name="ios-chevron-forward" size={23} color="#000" />
          </View>
          <Text style={styles.txtfatura}>Fatura atual</Text>
          <Text style={styles.txtvalue}>R$ 131,32</Text>
          <Text style={styles.txtfatura}>Limite disponivel de ••••••• </Text>
        </View>
        <View style={styles.parcelar}>
          <Text style={styles.txtparcelas}>Parcelar compras</Text>
          <Text style={styles.txtvalue}>5 x R$ 26,26</Text>
        </View>
        <View style={styles.separador}></View>

        <View>
          <Text style={styles.txtvalue}>Acompanhe também</Text>

          <View style={styles.card}>
            <MaterialIcons name="attach-money" size={24} color="#000" />
            <Text style={styles.txtcard}>Assistente de Pagamentos</Text>
          </View>
        </View>
        <View style={styles.separador}></View>

        <View>
          <Text style={styles.txtvalue}>Empréstimo</Text>
          <Text style={styles.txtfatura}>Valor disponível até</Text>
          <Text style={styles.bolinha}>••••••</Text>
        </View>
      </ScrollView>
      <StatusBar style="inverted" />
    </View>
  );
}
