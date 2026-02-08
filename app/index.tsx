import React from "react";
import {
  Alert,
  Image,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  const handleAlertPress = () => {
    Alert.alert("Alert Button pressed");
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Image
            source={{ uri: "https://img.icons8.com/ios/50/back.png" }}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerSubtitle}>OOTD_EVERYDAY</Text>
          <Text style={styles.headerTitle}>Posts</Text>
        </View>
        <View style={{ width: 30 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.postHeader}>
          <Image
            source={{ uri: "https://picsum.photos/seed/ootd1/100/100" }}
            style={styles.avatar}
          />
          <View style={styles.userInfo}>
            <Text style={styles.username}>ootd_everyday</Text>
            <Text style={styles.subText}>via frenchie_fry39</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.moreIcon}>...</Text>
          </TouchableOpacity>
        </View>

        <Image
          source={{ uri: "https://picsum.photos/seed/fashion1/600/750" }}
          style={styles.postImage}
        />

        <View style={styles.actionsRow}>
          <View style={styles.leftActions}>
            <TouchableOpacity>
              <Image
                source={{ uri: "https://img.icons8.com/ios/50/like--v1.png" }}
                style={styles.actionIconImg}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={{
                  uri: "https://img.icons8.com/ios/50/speech-bubble--v1.png",
                }}
                style={styles.actionIconImg}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={{ uri: "https://img.icons8.com/ios/50/sent--v1.png" }}
                style={styles.actionIconImg}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Image
              source={{
                uri: "https://img.icons8.com/ios/50/bookmark-ribbon--v1.png",
              }}
              style={styles.actionIconImg}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.likesRow}>
          <Image
            source={{ uri: "https://picsum.photos/seed/liker1/50/50" }}
            style={styles.likerAvatar}
          />
          <Image
            source={{ uri: "https://picsum.photos/seed/liker2/50/50" }}
            style={[styles.likerAvatar, { marginLeft: -8 }]}
          />
          <Text style={styles.likesText}>
            Liked by <Text style={styles.bold}>paisley.print.48</Text> and{" "}
            <Text style={styles.bold}>7 others</Text>
          </Text>
        </View>

        <View style={styles.captionContainer}>
          <Text style={styles.captionText}>
            <Text style={styles.bold}>frenchie_fry39</Text> Fresh shot on a
            sunny day! ☀️
          </Text>
        </View>

        <TouchableOpacity>
          <Text style={styles.viewComments}>View all 12 comments</Text>
        </TouchableOpacity>

        <View style={styles.commentContainer}>
          <Text style={styles.commentText}>
            <Text style={styles.bold}>lil_wyatt838</Text> Awesome tones
          </Text>
        </View>

        <View style={styles.commentContainer}>
          <Text style={styles.commentText}>
            <Text style={styles.bold}>pia.in.a.pod</Text> Gorg. Love it! ❤️
          </Text>
        </View>

        <Text style={styles.timeAgo}>1 day ago</Text>

        <View style={styles.alertButtonContainer}>
          <TouchableOpacity
            style={styles.alertButton}
            onPress={handleAlertPress}
            activeOpacity={0.8}
          >
            <Text style={styles.alertButtonText}>Alert</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={{ uri: "https://img.icons8.com/ios-filled/50/home.png" }}
            style={styles.navIconImg}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={{ uri: "https://img.icons8.com/ios/50/search--v1.png" }}
            style={styles.navIconImg}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={{ uri: "https://img.icons8.com/ios/50/plus-math--v1.png" }}
            style={styles.navIconImg}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={{
              uri: "https://img.icons8.com/ios/50/clapperboard--v1.png",
            }}
            style={styles.navIconImg}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={{
              uri: "https://img.icons8.com/ios-filled/50/user-male-circle.png",
            }}
            style={styles.navIconImg}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 44,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#dbdbdb",
  },
  backButton: {
    padding: 4,
  },
  backIcon: {
    width: 22,
    height: 22,
  },
  headerCenter: {
    alignItems: "center",
  },
  headerSubtitle: {
    fontSize: 12,
    color: "#737373",
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#262626",
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  username: {
    fontWeight: "600",
    fontSize: 13,
    color: "#262626",
  },
  subText: {
    fontSize: 11,
    color: "#737373",
  },
  moreIcon: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#262626",
  },
  postImage: {
    width: "100%",
    aspectRatio: 0.8,
    backgroundColor: "#efefef",
  },
  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingBottom: 8,
  },
  leftActions: {
    flexDirection: "row",
    gap: 16,
  },
  actionIconImg: {
    width: 24,
    height: 24,
  },
  likesRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    marginBottom: 6,
  },
  likerAvatar: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#ffffff",
  },
  likesText: {
    fontSize: 13,
    color: "#262626",
    marginLeft: 6,
  },
  bold: {
    fontWeight: "600",
  },
  captionContainer: {
    paddingHorizontal: 12,
    marginBottom: 4,
  },
  captionText: {
    fontSize: 13,
    color: "#262626",
    lineHeight: 18,
  },
  viewComments: {
    fontSize: 13,
    color: "#737373",
    paddingHorizontal: 12,
    marginBottom: 4,
  },
  commentContainer: {
    paddingHorizontal: 12,
    marginBottom: 3,
  },
  commentText: {
    fontSize: 13,
    color: "#262626",
    lineHeight: 18,
  },
  timeAgo: {
    fontSize: 11,
    color: "#737373",
    paddingHorizontal: 12,
    marginTop: 4,
    marginBottom: 8,
  },
  alertButtonContainer: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    alignItems: "center",
  },
  alertButton: {
    backgroundColor: "#0095f6",
    paddingVertical: 14,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  alertButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    borderTopWidth: 0.5,
    borderTopColor: "#dbdbdb",
    backgroundColor: "#ffffff",
  },
  navItem: {
    padding: 6,
  },
  navIconImg: {
    width: 26,
    height: 26,
  },
});
