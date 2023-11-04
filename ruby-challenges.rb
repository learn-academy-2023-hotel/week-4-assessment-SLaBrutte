# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

# Pseudo code:
# line 17: created a method that takes in a number
# lines 18-22: created a conditional statement that checks if the number is even or odds and outputs the result using string interpolation

def even_or_ odds (number)    
    if number % 2 == 0        
        "#{number} is even"
    else
        "#{number} is odd"
    end
end

# p even_or_odds(reposts1)
# p even_or_odds(reposts2)
# p even_or_odds(reposts3)
    

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# Pseudo code:
# line 47: created a method which takes in a string
# line 48: created a variable which holds my vowels both lower and uppercase
# line 49-53: created a conditional statement that uses the scan method (cycles through my string and picks out my vowels)
# if any vowels are found delete them from the original string and return output
# if no vowels are found return the original string

def vowel_remover (string)
    vowels = ('a' 'e' 'i' 'o' 'u' 'A' 'E' 'I' 'O' 'U')
    if string.scan(vowels)
        string.delete(vowels)
    else
        string
    end
end

# p vowel_remover(beatles_album1)
# p vowel_remover(beatles_album2)
# p vowel_remover(beatles_album3)


# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# Pseudo code:
# line 76: created a method which takes in a string
# line 77: created a new variable to hold the data of my original string that was transformed into all uppercase
# line 78-82: created a condition that checks if my new string is equal to itself reversed
# if true or false. return the original string with desired output using string interpolation

def palindrome_checker (string)
    newstring = string.upcase
    if newstring == newstring.reverse
        "#{string} is a palindrome"
    else
        "#{string} is not a palindrome"
    end
end

# p palindrome_checker(palindrome_test_case1)
# p palindrome_checker(palindrome_test_case2)
# p palindrome_checker(palindrome_test_case3)
