import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    backgroundColor: "#rgb(48, 47, 47)",
  },

  label: {
    color: "#ffffff",
    fontSize: 16,
    marginBottom: 4,
  },

  input: {
    backgroundColor: "#ffffff",
    padding: 10,
    marginBottom: 16,
    borderRadius: 4,
  },

  result: {
    marginTop: 16,
    color: "#fff",
    fontSize: 18,
  },

  button: {
    backgroundColor: "#f7b110",
    padding: 12,
    borderRadius: 4,
    flex: 1,
    alignItems: "center",
    marginRight: 8,
  },

  buttonText: {
    fontWeight: "bold",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
});

export default styles;
