import fs from "fs/promises";
import path from "path";

export class JSONFilesHelper {
	private filePath: string = path.join(__dirname, "../data/products.json");

	public async readJSONFile() {
		try {
			const data = await fs.readFile(this.filePath, "utf-8");
			return JSON.parse(data);
		} catch (error) {
			console.error("Error reading JSON file:", error);
			throw new Error("Error reading JSON file");
		}
	}
}
