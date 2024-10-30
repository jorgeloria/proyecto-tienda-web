import { Console } from "console";
import fs from "fs/promises";
import path from "path";

export class JSONFilesHelper {
	private filePath: string = path.join(__dirname, "../data/products.json");
	private userFilePath: string = path.join(__dirname, "../data/users.json");

	public async readProductJSONFile() {
		try {
			const data = await fs.readFile(this.filePath, "utf-8");
			return JSON.parse(data);
		} catch (error) {
			console.error("Error reading JSON file:", error);
			throw new Error("Error reading JSON file");
		}
	}

	public async readUserJSONFile() {
		try {
			const data = await fs.readFile(this.userFilePath, "utf-8");
			console.log("[JSONFilesHelper]" + data);
			return JSON.parse(data);
		} catch (error) {
			console.error("Error reading JSON file:", error);
			throw new Error("Error reading JSON file");
		}
	}
}
