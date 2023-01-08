/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import "react-native-gesture-handler";
import React from "react";
import type { ReactNode } from "react";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import { Heading } from "./packages/components";
import LandingScreen from "./packages/components/Lottie/Landing";

const App: () => ReactNode = () => {
	return (
		<SafeAreaView>
			<StatusBar barStyle={"light-content"} />
			<ScrollView contentInsetAdjustmentBehavior="automatic">
				<Heading
					wrapperStyle={{ backgroundColor: "red" }}
					title={"Heading Component"}
				/>
				<LandingScreen />
			</ScrollView>
		</SafeAreaView>
	);
};

export default App;
