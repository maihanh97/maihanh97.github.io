import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './Shape.style';
import {profileModel} from '../../../ListData/Properties';
import {GROUP83, GROUP87} from '../../../../assets/index';

interface Props{
    datas:profileModel
}
const Shape =(props: Props) =>{
    return (
        <View>
            <View  style={styles.rowTwo}>
                <View style={styles.viewRowTwo}>
                    <View>
                        <Text>Chiều cao</Text>
                        <Text>Cân nặng</Text>
                    </View>
                    <View>
                        <Text style={styles.fontWeight}>{props.datas.height} cm</Text>
                        <Text style={styles.fontWeight}>{props.datas.weight} kg</Text>
                    </View> 
                    <View>
                        <Text>BMI: {props.datas.BMI}</Text>
                        <Text>{props.datas.status}</Text>
                    </View>   
                </View>
                <Image
                    source={GROUP87}
                />
            </View>
            
            <View style={styles.rowThree}>
                <View style={styles.threeDotOne}>
                    <View style={{flexDirection: "row", justifyContent: 'center', alignItems: 'center'}}>
                        <Image
                            source={GROUP83}
                        />
                        <Text>{props.datas.heart}</Text>     
                    </View>
                    
                    <Text>Nhịp tim (p)</Text>
                </View>

                <View style={styles.threeDotTwo}>
                    <Text>{props.datas.bloodPressureMax}/{props.datas.bloodPressureMin}</Text> 
                    <Text>Huyết áp (mmhg)</Text>
                </View>

                <View style={styles.threeDotThree}>
                    <Text>---</Text> 
                    <Text>Hô hấp</Text>
                </View>

            </View>    
        </View>
    );
}

export default Shape;