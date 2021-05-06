import MaskedView from '@react-native-community/masked-view';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const HomeScreen = () => (
    <View style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
        <MaskedView
            style={{ height: 100, width: 100, flexDirection: 'row', backgroundColor: 'blue' }}
            maskElement={
                <View
                    style={{
                        // Transparent background because mask is based off alpha channel.
                        backgroundColor: 'transparent',
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <TouchableOpacity style={{ width: 100, height: 100, backgroundColor: 'green' }}
                        onPress={() => {
                            alert("okoko")
                        }}
                    >

                    </TouchableOpacity>
                </View>
            }
        >
            <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: 'blue' }}
                onPress={() => {
                    alert("alao")
                }}
            >

            </TouchableOpacity>
        </MaskedView>
    </View>
);

export default HomeScreen;
