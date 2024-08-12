import os
import requests
import re
from typing import Dict
import json


def extract_publication_info(text: str):
    """
    Extracts specified information from the given text.

    :param text: The input text containing the information.
    :param labels: A dictionary where keys are the labels to extract, and values are the regex patterns.
    :return: A dictionary with the extracted information.
    """
    labels = {
        "Authors": r"^Authors\n(.+?)\n",
        "PublicationDate": r"^Publication date\n(.+?)\n",
        "Conference": r"^Conference\n(.+?)(?=\n|$)",
        "Pages": r"^Pages\n(.+?)\n",
        "Publisher": r"^Publisher\n(.+?)\n",
        "Description": r"^Description\n(.+?)(?=\n[A-Za-z]|$)",
        "ScholarArticles": r"^Scholar articles\n(.+?)\n",
    }
    extracted_info = {}

    # Extract the title as the first line
    title_match = re.match(r"^(.*)$", text, re.MULTILINE)
    if title_match:
        extracted_info['Title'] = title_match.group(1).strip()

    # Extract information based on provided patterns
    for label, pattern in labels.items():
        match = re.search(pattern, text, re.DOTALL | re.MULTILINE)
        if match:
            extracted_info[label] = match.group(1).strip()
            # Extract abbreviation if label is "Conference"
            if label == "Conference":
                abbreviation_match = re.search(r"\(([^)]+)\)", match.group(1))
                if abbreviation_match:
                    extracted_info['Conference Abbreviation'] = abbreviation_match.group(
                        1).strip()

    # Extract URLs from the text
    link_pattern = r'https?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\\(\\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+'
    links = re.findall(link_pattern, text)
    if links:
        extracted_info['Link'] = links[0]

    return extracted_info


def update_filepath(jsondata):
    path = "../public/assets"
    # blogs photos publications
    dirs = os.listdir(path)
    # traverse through all files
    for dir in dirs:  # blogs photos publications
        if os.path.isdir(f"{path}/{dir}"):
            year_dirs = os.listdir(f"{path}/{dir}")  # year
            for year_dir in year_dirs:  # content
                if os.path.isdir(f"{path}/{dir}/{year_dir}"):
                    files = os.listdir(f"{path}/{dir}/{year_dir}")
                    frontendpath = path.replace("../public/assets", "/assets")
                    for file in files:
                        res_path = frontendpath + f"/{dir}/{year_dir}/{file}"
                        # Initialize directory and year_dir in the data dictionary
                        if year_dir not in jsondata[dir]:
                            jsondata[dir][year_dir] = []
                        # Append the result to the list
                        res = {
                            "path": res_path,
                            "description": "",
                        }
                        # check if res.path already exists,if not append empty description else skip
                        if res["path"] not in [i["path"] for i in jsondata[dir][year_dir]]:
                            jsondata[dir][year_dir].append(res)
                        else:
                            continue
    return jsondata

if __name__ == "__main__":
    path = "../src/filelist.json"

    if not os.path.exists(path):
        print("File does not exist")
        json_data = {"blogs": {}, "photos": {}, "publications": {}}
    else:
        json_data = open(path, "r")
        json_data = json.load(json_data)
    
    json_data = update_filepath(json_data)
    
    with open("filelist.json", "w") as f:
        json.dump(json_data, f, indent=4)