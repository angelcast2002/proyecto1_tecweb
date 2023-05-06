import NewChat from "./NewChat"

export default {
  title: "NewChat",
  component: NewChat,
  tags: ["autodocs"],
  argTypes: {},
}

export const asDefault = {
  args: {
    text: "New Chat",
    textColor: "white",
  },
}

export const asPrimary = {
  args: {
    text: "New Chat",
    textColor: "white",
    backgroundColor: "blue",
  },
}

export const asSecundary = {
  args: {
    text: "Eliminar chat",
    textColor: "red",
    backgroundColor: "white",
  },
}
