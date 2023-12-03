package com.example.servingwebcontent.form;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class CountryOperationForm {
    
    @NotBlank(message = "Country Cd should not be blank")
    private String mstcountrycd;
    @NotBlank(message = "Country Nanme should not be blank")
    private String mstcountrynanme;
    
    public CountryOperationForm() {
    }
    
    public CountryOperationForm(String mstcountrycd, String mstcountrynanme) {
        this.mstcountrycd = mstcountrycd;
        this.mstcountrynanme = mstcountrynanme;
    }
}