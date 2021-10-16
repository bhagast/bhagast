import {whileStatement} from '@babel/types';
import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

export default function App() {
  return (
    // Header//
    <ScrollView>
      <View
        style={{
          backgroundColor: '#00ff00',
          flexDirection: 'column',
          padding: 20,
          borderRadius: 20,
          margin: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Entypo name="chevron-left" size={22} color="white" />
            <Entypo name="wallet" size={22} color="white" />
            <Text
              style={{
                color: '#000000',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Gopay
            </Text>
          </View>
          <Entypo name="dots-three-horizontal" size={22} color="white" />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 35,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              height: 70,
              width: 70,
              marginRight: 20,
              borderRadius: 40,
              flexDirection: 'row',
            }}>
            <Image
              source={require('./avatar.jpeg')}
              style={{
                height: 70,
                width: 70,
                borderRadius: 40,
              }}></Image>
          </View>
          <View>
            <Text
              style={{
                color: '#000000',
                fontSize: 20,
                fontWeight: 'bold',
                flexDirection: 'row',
              }}>
              Bhagast
            </Text>
            <Text>Tap to see your gojek profile</Text>
          </View>
        </View>
        {/* Menu */}
      </View>
      {/* parent */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 10,
        }}>
        {/* Pay */}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#00ff00',
              height: 70,
              width: 70,
              borderRadius: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Entypo name="arrow-with-circle-up" size={35} color="white" />
          </View>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '600',
              color: 'black',
              marginTop: 5,
            }}>
            Pay
          </Text>
        </View>
        {/* top up */}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#00ff00',
              height: 70,
              width: 70,
              borderRadius: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Entypo name="circle-with-plus" size={35} color="white" />
          </View>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '600',
              color: 'black',
              marginTop: 5,
            }}>
            Top Up
          </Text>
        </View>
        {/* request */}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#00ff00',
              height: 70,
              width: 70,
              borderRadius: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Entypo name="align-bottom" size={35} color="white" />
          </View>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '600',
              color: 'black',
              marginTop: 5,
            }}>
            Request
          </Text>
        </View>
        {/* Paylater */}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#00ff00',
              height: 70,
              width: 70,
              borderRadius: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Entypo name="controller-fast-forward" size={35} color="white" />
          </View>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '600',
              color: 'black',
              marginTop: 5,
            }}>
            Paylater
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 20,
        }}>
        {/* Cash out */}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#00ff00',
              height: 70,
              width: 70,
              borderRadius: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Entypo name="creative-commons" size={35} color="white" />
          </View>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '600',
              color: 'black',
              marginTop: 5,
            }}>
            Cash Out
          </Text>
        </View>
        {/* plus */}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#00ff00',
              height: 70,
              width: 70,
              borderRadius: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Entypo name="add-to-list" size={35} color="white" />
          </View>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '600',
              color: 'black',
              marginTop: 5,
            }}>
            Plus
          </Text>
        </View>
        {/* go tagihan */}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#00ff00',
              height: 70,
              width: 70,
              borderRadius: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Entypo name="news" size={35} color="white" />
          </View>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '600',
              color: 'black',
              marginTop: 5,
            }}>
            Go Tagihan
          </Text>
        </View>
        <View
          style={{
            height: 70,
            width: 70,
            borderRadius: 40,
          }}></View>
      </View>
      <View
        style={{
          marginLeft: 15,
          marginRight: 15,
        }}>
        <View
          style={{
            backgroundColor: '#fff',
            borderColor: 'gray',
            borderStyle: 'solid',
            borderWidth: 2,
            height: 150,
            borderRadius: 10,
            padding: 10,
            marginTop: 10,
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginLeft: 10,
              marginRight: 10,
            }}>
            <Text style={{fontSize: 16, color: '#000', fontWeight: 'bold'}}>
              GoPay friends
            </Text>
            <Text style={{fontSize: 12, color: 'green', fontWeight: 'bold'}}>
              See more
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginLeft: 10,
              justifyContent: 'flex-start',
            }}>
            <Text style={{fontSize: 12, color: 'gray'}}>
              These are who you last sent or requested GoPay to.
            </Text>
            <Text style={{fontSize: 12, color: 'gray'}}>
              Tap their name to send again.
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginLeft: 10,
              marginRight: 10,
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                  backgroundColor: 'oldlace',
                  marginTop: 10,
                }}>
                <Image
                  source={require('./avatar2.jpeg')}
                  width={50}
                  height={50}
                  style={{width: 50, height: 50, borderRadius: 100}}
                />
              </View>
              <Text style={{fontSize: 12, color: 'gray'}}>Roni</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                  backgroundColor: 'oldlace',
                  marginTop: 10,
                }}>
                <Image
                  source={require('./avatar2.jpeg')}
                  width={50}
                  height={50}
                  style={{width: 50, height: 50, borderRadius: 100}}
                />
              </View>
              <Text style={{fontSize: 12, color: 'gray'}}>Bambang</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                  backgroundColor: 'oldlace',
                  marginTop: 10,
                }}>
                <Image
                  source={require('./avatar2.jpeg')}
                  width={50}
                  height={50}
                  style={{width: 50, height: 50, borderRadius: 100}}
                />
              </View>
              <Text style={{fontSize: 12, color: 'gray'}}>Amir</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                  marginTop: 10,
                }}></View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                  marginTop: 10,
                }}></View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          marginLeft: 20,
          marginRight: 20,
        }}>
        <View>
          <Text
            style={{
              paddingTop: 20,
              paddingBottom: 10,
              fontWeight: 'bold',
              color: 'black',
            }}>
            History
          </Text>
        </View>
        <View
          style={{
            height: 80,
            justifyContent: 'space-between',
            borderBottomWidth: 1,
            borderBottomColor: 'lightgrey',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{fontSize: 17, fontWeight: 'bold', color: 'black'}}>
                  GoPay top Up First Item
                </Text>
                <Text style={{fontWeight: 'bold', fontSize: 16, color: 'blue'}}>
                  #2093774218741827
                </Text>
                <Text style={{color: 'grey', fontSize: 14}}>
                  9 Apr, 9.30 PM
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', alignContent: 'flex-end'}}>
              <Text
                style={{
                  justifyContent: 'flex-start',
                  fontSize: 13,
                  color: 'black',
                  fontWeight: 'bold',
                  alignContent: 'flex-start',
                }}>
                Rp
              </Text>
              <Text style={{fontSize: 24, fontWeight: 'bold', color: 'black'}}>
                52.000
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          marginLeft: 20,
          marginRight: 20,
          overflow: 'scroll',
        }}>
        <View>
          <Text
            style={{
              paddingTop: 20,
              paddingBottom: 10,
              fontWeight: 'bold',
              color: 'navy',
            }}>
            History
          </Text>
        </View>
        <View
          style={{
            height: 80,
            justifyContent: 'space-between',
            borderBottomWidth: 1,
            borderBottomColor: 'lightgrey',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{fontSize: 17, fontWeight: 'bold', color: 'black'}}>
                  GoPay top Up First Item
                </Text>
                <Text style={{fontWeight: 'bold', fontSize: 16, color: 'blue'}}>
                  #2093774218741827
                </Text>
                <Text style={{color: 'grey', fontSize: 14}}>
                  9 Apr, 9.30 PM
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', alignContent: 'flex-end'}}>
              <Text
                style={{
                  justifyContent: 'flex-start',
                  fontSize: 13,
                  color: 'black',
                  fontWeight: 'bold',
                  alignContent: 'flex-start',
                }}>
                Rp
              </Text>
              <Text style={{fontSize: 24, fontWeight: 'bold', color: 'black'}}>
                51.000
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
