import { StyleSheet } from "react-native-web"

const styles = StyleSheet.create({
    card: {
        width: 300,
        height: 500,
        padding: 10,
        backgroundColor: "#151E3F",
        alignItems: "center",
        position: "relative",
        borderRadius: 10,
        marginBottom: 30,
        boxShadow: "0px 4px 19px -2px rgba(0,0,0,0.75)",
    },
    card__img: {
        width: "100%",
        height: "50%",
    },
    img: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    card__content: {
        width: "100%",
        height: "50%",
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 5,
    },
    content: {
        width: "100%",
        height: "100%",
        backgroundColor: "#87A0B2",
        border: "7px solid #87A0B2",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: 10,
    },
    name: {
        width: "70%",
        fontSize: 24,
        fontWeight: 300,
        textAlign: "center",
        padding: 5,
        backgroundColor: '#F2F2F2', //"#F7C1BB",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 1,
        borderRadius: 10,
        boxShadow: "0px 4px 19px -2px rgba(0,0,0,0.75)",
    },
    desc: {
        color: "#000",
        fontSize: 18,
        fontWeight: 400,
        textAlign: "justify",
    }
})

export default styles