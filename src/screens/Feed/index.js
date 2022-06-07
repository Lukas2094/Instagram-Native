import React from "react";
import {View, Text , FlatList , Image , StyleSheet , TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFilter, faHeart , faComment, faPaperPlane, faBookmark } from "@fortawesome/free-solid-svg-icons";
export default function Feed() {

    const posts = [
        {
            id: '1',
            author: 'levit.dev',
            picture_url: 'https://images3.alphacoders.com/113/thumb-1920-1130886.png',
            likes_count: '1258',
            description: 'Saiu o App !!!',
            hashtags: '#Apps #google ',
            place: 'Google.Inc'
        },

        {
            id: '2',
            author: 'levit.dev',
            picture_url: 'https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2020/06/coluna-zaiet-facebook-ahmed-altamimi-pixabay.png',
            likes_count: '784',
            description: 'Saiu o App !!!',
            hashtags: '#Apps #facebook ',
            place: 'Facebook.Inc'
        },

        {
            id: '3',
            author: 'levit.dev',
            picture_url: 'https://img.olhardigital.com.br/wp-content/uploads/2019/11/20191120020457.jpg',
            likes_count: '397',
            description: 'Saiu o App !!!',
            hashtags: '#Apps #apple  #maçã',
            place: 'Apple Computer '
        },

        {
            id: '4',
            author: 'levit.dev',
            picture_url: 'https://99prod.s3.amazonaws.com/uploads/b5a3b4af-f9e8-40db-9e5e-576791aa5307/microsoft.png',
            likes_count: '549',
            description: 'Saiu o App !!!',
            hashtags: '#Apps #microsoft #windows ',
            place: 'Microsoft'
        },
    ]
    
    const styles = StyleSheet.create({
        postHeader: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            alignItems: 'center',
            marginBottom: 15,
            marginTop: 30,
        },

        userInfo: {},

        author: {
            fontSize: 14 ,
            color: 'black',
            fontWeight: 'bold',
        },

        place: {
            fontSize:  12,
            color: '#666',
        },

        picture_url: {
            width: '100%',
            height: 300,
            marginBottom: 15,
        },

        footer: {
            paddingHorizontal: 15,
        },

        action: {},

        actions: {
            marginRight: 8,
        },

        leftaction: {
            flexDirection: 'row',
        },

        likes: {
            fontWeight: 'bold',
            fontSize: 12,
        },

        hashtags: {
            color: '#002d5e',
        },

        comment: {
            color: '#000',
            lineHeight: 18,
            marginBottom: 10,
        },

        postOptions: {},
    });

    function renderItens({ item: post }) {
        return (
           <View>
                
               <View style={styles.postHeader}>
                   
                    <View style={styles.userInfo}>
                         <Text style={styles.author}>{post.author}</Text>
                         <Text style={styles.place}>{post.place}</Text>
                    </View>

                    <View style={styles.postOptions}>
                        <TouchableOpacity>
                           <FontAwesomeIcon icon={faFilter} />
                        </TouchableOpacity>
                    </View>
               </View>

                     <View>
                        <Image style={styles.picture_url} source={{uri: post.picture_url}} />  
                    </View>

                    <View style={styles.footer}>
                         <View style={styles.action}>
                            <View style={styles.leftaction}> 
                                <TouchableOpacity style={styles.actions}>
                                    <FontAwesomeIcon icon={faHeart} />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.actions}>
                                    <FontAwesomeIcon icon={faComment} />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.actions}>
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </TouchableOpacity>
                            </View>

                            <View>
                                <TouchableOpacity style={{display: 'flex' , flexDirection: 'row-reverse'}}>
                                    <FontAwesomeIcon icon={faBookmark} />
                                </TouchableOpacity>
                            </View>
                         </View>

                         <View>
                              <Text style={styles.likes}>{post.likes_count} likes</Text>

                              <Text style={styles.hashtags}>{post.hashtags}</Text>

                              <Text style={styles.comment}>{post.description}</Text>
                         </View>                   
                    </View>
           </View>
        )
    }

    return (
        <View>
            <FlatList 
             data={posts}
             keyExtractor={(item) => item.id}
             renderItem={renderItens}
            />
        </View>
    )


    
}