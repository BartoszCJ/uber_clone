import React from "react";
import { View, Text, Image } from "react-native";
import CustomButton from "./CustomButton"; // Zakładam, że masz ten komponent
import { icons } from "@/constants"; // Zakładam, że masz poprawnie skonfigurowane ikony

const OAuth = () => {
  const handleGoogleSignIn = async () => {
    try {
      // Tutaj dodaj logikę do logowania przez Google
      console.log("Google Sign-In clicked");
    } catch (error) {
      console.error("Google Sign-In error:", error);
    }
  };

  return (
    <View>
      {/* Separator z "Or" */}
      <View className="flex flex-row justify-center items-center mt-4 gap-x-3">
        <View className="flex-1 h-[1px] bg-general-100" />
        <Text className="text-lg text-neutral-500">Or</Text>
        <View className="flex-1 h-[1px] bg-general-100" />
      </View>

      {/* Przycisk logowania przez Google */}
      <CustomButton
        title="Log in with Google"
        className="mt-5 w-full shadow-none"
        IconLeft={() => (
          <Image
            source={icons.google}
            resizeMode="contain"
            className="w-5 h-5 mx-2"
          />
        )}
        bgVariant="outline"
        textVariant="primary"
        onPress={handleGoogleSignIn}
      />
    </View>
  );
};

export default OAuth;
