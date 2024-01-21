def modify_script(input_script_path, includes_file_path, output_script_path):
    # Read the content of the input script
    with open(input_script_path, 'r') as input_file:
        script_lines = input_file.readlines()

    # Find the last line that starts with "// @description:"
    last_description_line_index = None
    for i in range(len(script_lines) - 1, -1, -1):
        if script_lines[i].startswith('// @description:'):
            last_description_line_index = i
            break

    # Read the content of the includes file
    with open(includes_file_path, 'r') as includes_file:
        includes_content = includes_file.read()

    # Remove lines starting with "// @include"
    script_lines = [line for line in script_lines if not line.startswith('// @include')]

    # Insert includes and excludes content after the last description line
    excludes_content = '' ###"// @exclude-match *://*google.com/*\n"
    script_lines.insert(last_description_line_index + 1, includes_content + excludes_content)

    # Write the modified script to the output file
    with open(output_script_path, 'w') as output_file:
        output_file.writelines(script_lines)

    print(f"OK: @Include lines added. Script successfully modified and saved to {output_script_path}.")


def modify_script_extra(file_path):
    try:
        with open(file_path, 'r') as file:
            content = file.read()

            #Change title
            content = content.replace("// @name       Bypass All Shortlinks", "// @name       Bypass All Shortlinks Debloated")

            #Change source URL
            content = content.replace("https://update.greasyfork.org/scripts/431691/Bypass%20All%20Shortlinks.user.js",
                                      "https://github.com/rushiranpise/userscripts/raw/main/Bypass_All_Shortlinks.user.js")
            
            content = content.replace("https://update.greasyfork.org/scripts/431691/Bypass%20All%20Shortlinks.meta.js",
                                      "https://github.com/rushiranpise/userscripts/raw/main/Bypass_All_Shortlinks.user.js")

            #Remove tracking
            content = content.replace("'https://rotator.nurul-huda.sch.id/?BypassResults=' + url", "'' + url")
            content = content.replace("let respect = 'https://free4u.nurul-huda.or.id/?BypassResults=';", "let respect = '';")
            content = content.replace("\n// @antifeature    tracking", "")


        # Write the modified content back to the file
        with open(file_path, 'w') as file:
            file.write(content)

        print("OK: Extra Modifications completed successfully.")

    except FileNotFoundError:
        print(f"File '{file_path}' not found.")
    except Exception as e:
        print(f"An error occurred: {e}")


def main():
    input_script_path = 'untouched_Bypass_All_Shortlinks.user.js'
    includes_file_path = 'includes.txt'
    output_script_path = 'Bypass_All_Shortlinks.user.js'
    modify_script(input_script_path, includes_file_path, output_script_path)
    modify_script_extra(output_script_path)

if __name__ == "__main__":
    main()
