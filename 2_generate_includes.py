import re

def extract_regex_from_js(js_code):
    pattern1 = r'BypassedByBloggerPemula\((.*?),'
    matches1 = re.findall(pattern1, js_code)
    matches1 = [match.strip('/') for match in matches1]
    
    pattern2 = r"BloggerPemula\('([^']+)',"
    matches2 = re.findall(pattern2, js_code)
    #matches2 = ['/' + s + '/' for s in matches2]

    pattern3 = r"RemoveBp\('([^']+)',"
    matches3 = re.findall(pattern3, js_code)

    pattern4 = r'case \'(.*?)\':'
    matches4 = re.findall(pattern4, js_code)

    pattern5 = r"h\.href\.includes\('(.*?)'\)"
    matches5 = re.findall(pattern5, js_code)

    return matches1+matches2+matches3+matches4+matches5

def regex_to_include_line(regex):
    #regex = regex.strip("/")

    #Use @include for more complex regex
    if any(char in regex for char in ['|', '(', ')', '*']):
        regex = '(' + regex + ')'
        include_line = "// @include /^(https?:\/\/)(.+)?" + regex + "(\/.*)/"
        include_line = include_line.replace( "\.*)(\/.*)/", "\.*)/" ) #clean excess in the regex

    #Use @match for simpler regex
    else:
        include_line = '// @match *://*.' + regex + '/*'

    return include_line

def generate_include_lines(regex_list):
    include_lines = []
    for regex in regex_list:
        include_line = regex_to_include_line(regex)
        include_lines.append(include_line)

    # Manual additions of lines

    ## -Adding this so that captchas can be auto-opened by this userscript
    include_lines.append('// @match *://*/recaptcha/api2/*')

    ## -Adding this as a go-to URL for accessing the settings menu in this userscript
    ###include_lines.append('// @match https://github.com/rushiranpise/userscripts*')

    return include_lines

def write_to_file(filename, lines):
    with open(filename, 'w') as file:
        for line in lines:
            file.write(line + '\n')
    print(f"OK: Generated {filename}")

def compile_and_print(regex_strings):
    #for regex_string in regex_strings: print(regex_string)
    write_to_file('supported_sites.txt', regex_strings)

    include_lines = generate_include_lines(regex_strings)
    print(f"OK: Generated {len(include_lines)} include lines.")
    
    #for line in include_lines: print(line)
    write_to_file('includes.txt', include_lines)


def main():
    file_path = 'untouched_Bypass_All_Shortlinks.user.js'
    
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            js_code = file.read()

            regex_strings = extract_regex_from_js(js_code)

            # remove short domains (errors)
            regex_strings = [s for s in regex_strings if "." in s and len(s) >= 5] 
            
            # remove Google domains
            regex_strings = [s for s in regex_strings if "google" not in s]

            compile_and_print(regex_strings)
    except FileNotFoundError:
        print(f"Error: File '{file_path}' not found.")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    main()
