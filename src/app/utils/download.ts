const downloadFile = async (
  filePath: string,
  fileName: string
): Promise<void> => {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error("Failed to download file");
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    link.parentNode?.removeChild(link);
  } catch (error) {
    console.error("Error downloading file:", error);
  }
};

export default downloadFile;
