import React from "react";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";
import LandingAnimation from "../../assets/lottie/landingAnimation.json";

const LandingScreen = () => {
	return (
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		<View className="h-full w-full justify-center items-center bg-green-500">
			<LottieView
				source={LandingAnimation}
				style={styles.lottieViewStyle}
				autoPlay
				loop
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	lottieViewStyle: { height: 300, width: 300 },
});

export default LandingScreen;
