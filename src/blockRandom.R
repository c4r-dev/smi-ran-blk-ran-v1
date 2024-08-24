library(RColorBrewer)

# In how many blocks will subjects be randomized?
n_blocks <- 6

# How many treatments are we using?
n_treatments <- 4

# Generate random orders of treatments
treatment_blocks <- 
  sample(n_treatments, n_treatments) |>
  replicate(n = n_blocks)

# Visualize the treatment orders
treatment_colors <- brewer.pal(n_treatments, "Purples")
par(xpd = T, mar = c(5, 4, 4, 8))
image(treatment_blocks, 
      col = treatment_colors,  
      xlab = "Treatment Order", ylab = "Block", 
      axes = FALSE)
axis(1, at = seq(0, 1, length.out = n_treatments), labels = seq(n_treatments))
axis(2, at = seq(0, 1, length.out = n_blocks), labels = seq(n_blocks))
legend(1 + 1.25/n_treatments, 1, title = "Treatments", 
       legend = LETTERS[seq(n_treatments)], fill = treatment_colors)