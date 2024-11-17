export const saveToFile = (name, data) => {
  try {
    const jsonData = JSON.stringify(data);
    const fileName = name ? name : new Date().toLocaleString();
    const blob = new Blob([jsonData], { type: "application/json" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", `${fileName}.json`);
    link.style.display = "none";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  } catch (error) {
    console.error("Ошибка при сохранении:", error);
  }
};

export const readFile = (callBack) => {
  try {
    const fileChooser = document.createElement("input");
    fileChooser.setAttribute("type", "file");
    fileChooser.setAttribute("style", "display:none;");
    document.body.appendChild(fileChooser);

    fileChooser.addEventListener("change", (event) => {
      const file = event.target.files[0];

      const reader = new FileReader();

      reader.onload = (event) => {
        const content = event.target.result;

        try {
          const data = JSON.parse(content);
          if (typeof data !== "object") {
            return;
          }
          callBack(data);
        } catch (error) {
          alert(
            "Неверный формат файла. Проверьте правильность загружаемого файла"
          );
          console.error(error);
        }
      };

      reader.readAsText(file);

      document.body.removeChild(fileChooser);
    });
    fileChooser.click();
  } catch (error) {
    console.error("Помилка при зчитуванні файлу:", error);
  }
};
