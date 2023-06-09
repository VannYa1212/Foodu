import {
    Text,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
    Image,
    TextInput,
    ScrollView,
  } from "react-native";
  import { View } from "react-native-animatable";
  import { useNavigation } from "@react-navigation/native";
  import React, { useState } from "react";
  import * as Icon from "react-native-feather";
  import { themeColors } from "../../theme";
export default function Signin() {
    const navigation = useNavigation();
    const [phoneNumber, setPhoneNumber] = useState('');
    return (
        <SafeAreaView className="bg-white flex-1">
          <ScrollView className="flex-1">
          <View className="flex-1 flex flex-col p-4 ">
            <TouchableOpacity
              style={{ backgroundColor: themeColors.bgColor(1) }}
              onPress={navigation.goBack}
              className="absolute z-10 rounded-full p-1 shadow  left-4 top-8"
            >
              <Icon.ArrowLeft strokeWidth={2} stroke="white" />
            </TouchableOpacity>
            <View className="flex flex-row items-center justify-center mt-20">
              <Image
                source={require("../../assets/images/Logo_Fd.png")}
                className="img-fluid h-40 w-40  resize-contain "
                style={styles.imgfluid}
              />
            </View>
            <Text className="text-center text-2xl font-bold text-gray-700">
                Login to Your Account
            </Text>
            {/* From */}
            <View className="flex flex-col mt-8 ">
              <View className="bg-white rounded-full shadow flex flex-row items-center px-4  border-gray-200 border">
                {/* Country Code */}
                <View className="flex flex-row items-center justify-center gap-2 ">
                  <Image
                    source={require("../../assets/images/usa.png")}
                    style={styles.countryCodeImg}
                  />
                  {/* Icon dropdown */}
                  <Icon.ChevronDown strokeWidth={2} stroke="black" />
                </View>
                {/* Phone number input */}
                <View style={styles.inputContainer}>
                  <TextInput
                    placeholder="+000 000 000"
                    keyboardType="numeric"
                    style={styles.input}
                    className="text-gray-800 text-lg font-normal w-full"
                  />
                </View>
              </View>
             
              
              <TouchableOpacity
                onPress={() => navigation.navigate("Otp")}
                className="bg-white rounded-full py-3  shadow flex flex-row items-center justify-center  border-gray-200 border mb-7 mt-8"
                style={{ backgroundColor: themeColors.bgColor(1) }}
              >
                <View className="flex flex-row items-center justify-center gap-4">
                  <Text className="text-center text-white text-lg font-normal">
                  Sign in
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
    
            <View className="flex flex-col mt-4">
              {/* or */}
              <View className="flex flex-row items-center justify-center mt-4">
                <View className="w-1/4 h-0.5 bg-gray-200"></View>
                <Text className="text-center text-gray-500 text-lg font-normal mx-4">
                  or continue with
                </Text>
                <View className="w-1/4 h-0.5 bg-gray-200"></View>
              </View>
                {/* Social media */}
               <View
                className="flex flex-row items-center justify-between px-10 gap-4 mt-4"
               >
                <TouchableOpacity
                    onPress={() => navigation.navigate("Otp")}
                    className="bg-white rounded-full py-3 flex-1  shadow flex flex-row items-center justify-center  border-gray-200 border mb-7 mt-8"
                    >
                        <Image
                            source={require("../../assets/images/logo_fb.png")}
                            style={styles.countryCodeImg}
                        />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Otp")}
                    className="bg-white rounded-full py-3  shadow flex flex-1 flex-row items-center justify-center  border-gray-200 border mb-7 mt-8"
                     
                    >
                        <Image
                            source={require("../../assets/images/logo_gl.png")}
                            style={styles.countryCodeImg}
                        />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Otp")}
                    className="bg-white rounded-full py-3  shadow flex-1 flex flex-row items-center justify-center  border-gray-200 border mb-7 mt-8"
                    
                    >
                        <Image
                            source={require("../../assets/images/logo_ap.png")}
                            style={styles.countryCodeImg}
                        />
                </TouchableOpacity>
               </View>
    
              <View className="flex flex-row items-center justify-center mt-4">
                <Text className="text-center text-gray-500 text-lg font-normal ">
                Don’t have an account?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                  <Text
                    className="text-center  text-lg font-normal ml-2"
                    style={{ color: themeColors.bgColor(1) }}
                  >
                    Sign up
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          </ScrollView>
        </SafeAreaView>
      );
    }
    
    const styles = StyleSheet.create({
      imgfluid: {
        resizeMode: "contain",
      },
      input: {
        height: 40,
        margin: 6,
        borderWidth: 1,
        padding: 8,
        outline: "none",
        borderWidth: 0,
      },
      countryCode: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      },
      countryCodeImg: {
        width: 30,
        height: 30,
        resizeMode: "contain",
      },
      inputContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
      },
    });